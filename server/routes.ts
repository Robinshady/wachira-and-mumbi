import express, { type Request, Response } from "express";
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, newsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import fetch from "node-fetch";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiRouter = express.Router();
  app.use("/api", apiRouter);

  // Contact form submission endpoint
  apiRouter.post("/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }

      // Remove privacy field as it's not needed for storage
      const { privacy, ...contactData } = result.data;
      
      // Store contact form submission
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        data: contact
      });
    } catch (error) {
      console.error("Error in contact form submission:", error);
      res.status(500).json({ message: "Server error processing contact form" });
    }
  });

  // Newsletter subscription endpoint
  apiRouter.post("/newsletter", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const result = newsletterSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      // Store newsletter subscription
      const newsletter = await storage.subscribeToNewsletter(result.data.email);
      
      res.status(201).json({ 
        message: "Newsletter subscription successful",
        data: newsletter
      });
    } catch (error) {
      console.error("Error in newsletter subscription:", error);
      res.status(500).json({ message: "Server error processing newsletter subscription" });
    }
  });

  // AI Assistant Chat endpoint with Perplexity API
  apiRouter.post("/chat", async (req: Request, res: Response) => {
    try {
      const { message, chatHistory } = req.body;
      
      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }
      
      // Prepare request to Perplexity API
      const perplexityApiUrl = "https://api.perplexity.ai/chat/completions";
      
      // Create context from previous messages
      const messages = [
        {
          role: "system",
          content: "You are a professional legal assistant for Wachira & Mumbi Advocates, a premium Kenyan law firm. Provide accurate, helpful, and concise information about legal matters, particularly related to Kenyan law. Your responses should be well-structured, professional, and reflect the high standards of the firm. Always maintain attorney-client confidentiality and emphasize that your responses are for informational purposes only and not legal advice."
        }
      ];
      
      // Add chat history if provided
      if (chatHistory && Array.isArray(chatHistory)) {
        chatHistory.forEach(msg => {
          if (msg.role === 'user' || msg.role === 'assistant') {
            messages.push({
              role: msg.role,
              content: msg.content
            });
          }
        });
      }
      
      // Add the current user message
      messages.push({
        role: "user",
        content: message
      });
      
      const response = await fetch(perplexityApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.1-sonar-small-128k-online",
          messages: messages,
          temperature: 0.2,
          max_tokens: 500,
          stream: false,
          frequency_penalty: 1
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Perplexity API error:", errorText);
        return res.status(response.status).json({ 
          message: "Error communicating with AI assistant service",
          error: errorText
        });
      }
      
      const data = await response.json() as any;
      
      // Return the AI response
      return res.status(200).json({
        message: "AI response generated successfully",
        data: {
          text: data.choices[0].message.content,
          citations: data.citations || []
        }
      });
      
    } catch (error) {
      console.error("Error in AI assistant chat:", error);
      res.status(500).json({ message: "Server error processing AI assistant request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

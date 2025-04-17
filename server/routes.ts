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
      
      // Create context from previous messages with enhanced Kenya-focused system prompt
      const messages = [
        {
          role: "system",
          content: `You are a professional legal assistant for Wachira & Mumbi Advocates, a premium Kenyan law firm. 

Your primary responsibilities:
1. Provide accurate, helpful, and concise information specifically about Kenyan law and legal matters.
2. Always prioritize Kenyan legal context, Kenyan court systems, and Kenyan legislation in your responses.
3. When searching for information, use kenyalaw.org as your primary source for legal information.
4. Ensure all references, case law, and legal precedents are from the Kenyan legal system.
5. For any general legal principles, explain how they specifically apply in the Kenyan context.
6. If discussing international law, always relate it back to how it's interpreted or applied in Kenya.
7. When mentioning resources, primarily refer users to Kenyan legal resources, government websites, and local legal aid organizations.
8. Use Kenyan terminology for legal processes (e.g., refer to the "Kenyan High Court" rather than general "high court").
9. Keep up with recent developments in Kenyan law and legal practice.

Your responses should be well-structured, professional, and reflect the high standards of a top Kenyan law firm. Always maintain attorney-client confidentiality and emphasize that your responses are for informational purposes only and not legal advice.

When users ask questions that require research, prioritize Kenyan sources in this order:
1. kenyalaw.org (primary source)
2. Kenyan government websites (.go.ke domains)
3. Kenyan law society and bar association resources
4. Respected Kenyan legal publications and journals
5. Kenyan university law department publications`
        }
      ];
      
      // Format messages to ensure proper alternation between user and assistant
      let formattedMessages = [];
      
      // Add chat history if provided, ensuring alternating pattern
      if (chatHistory && Array.isArray(chatHistory)) {
        // Find the last role to ensure we don't have repeated roles
        let lastRole = 'system';
        
        // Process each message in order
        for (const msg of chatHistory) {
          // Skip if the role is the same as the last one to maintain alternation
          if (msg.role === lastRole) {
            continue;
          }
          
          // Add the message if it's a valid role
          if (msg.role === 'user' || msg.role === 'assistant') {
            formattedMessages.push({
              role: msg.role,
              content: msg.content
            });
            
            lastRole = msg.role;
          }
        }
      }
      
      // Add messages to the main array
      messages.push(...formattedMessages);
      
      // Ensure proper alternation of messages ending with user message
      const lastMessage = messages.length > 1 ? messages[messages.length - 1] : null;
      
      // If there's only the system message, or the last message is from assistant
      if (messages.length === 1 || (lastMessage && lastMessage.role === 'assistant')) {
        messages.push({
          role: "user",
          content: message
        });
      } 
      // If the last message is already from user, we need to replace it
      else if (lastMessage && lastMessage.role === 'user') {
        // Remove the last message and add the current one
        messages.pop();
        messages.push({
          role: "user",
          content: message
        });
      }
      
      console.log("Final messages structure:", JSON.stringify(messages));
      
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
          frequency_penalty: 1,
          // Enable web search with Kenya-specific domains prioritized
          search_domain_filter: ["kenyalaw.org", "*.go.ke", "*.ac.ke", "*.co.ke"],
          // Focus on recent content
          search_recency_filter: "month",
          // Return citations for transparency
          return_related_questions: true
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

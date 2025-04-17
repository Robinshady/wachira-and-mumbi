import express, { type Request, Response } from "express";
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, newsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

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

  const httpServer = createServer(app);
  return httpServer;
}

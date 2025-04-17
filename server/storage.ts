import { users, type User, type InsertUser } from "@shared/schema";
import type { ContactFormData, NewsletterData, InsertContactData } from "@shared/schema";

// Extend the interface with required CRUD methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContactData): Promise<Contact>;
  subscribeToNewsletter(email: string): Promise<Newsletter>;
}

// Contact type for in-memory storage
export type Contact = InsertContactData & { id: number; createdAt: string };

// Newsletter type for in-memory storage
export type Newsletter = { id: number; email: string; createdAt: string };

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  
  private userId: number;
  private contactId: number;
  private newsletterId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    
    this.userId = 1;
    this.contactId = 1;
    this.newsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(contactData: InsertContactData): Promise<Contact> {
    const id = this.contactId++;
    const createdAt = new Date().toISOString();
    
    const contact: Contact = {
      ...contactData,
      id,
      createdAt
    };
    
    this.contacts.set(id, contact);
    return contact;
  }

  async subscribeToNewsletter(email: string): Promise<Newsletter> {
    // Check if email already exists
    const existingNewsletter = Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email
    );
    
    if (existingNewsletter) {
      return existingNewsletter;
    }
    
    const id = this.newsletterId++;
    const createdAt = new Date().toISOString();
    
    const newsletter: Newsletter = {
      id,
      email,
      createdAt
    };
    
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();

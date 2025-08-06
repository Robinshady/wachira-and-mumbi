# Project Overview

This is a full-stack JavaScript application built with React, Express, and Drizzle ORM. The project follows modern web development patterns with client-server separation for security and maintainability.

## Architecture

- **Frontend**: React with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter for frontend routing
- **State Management**: TanStack Query for server state

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, TypeScript, tsx for development
- **Database**: Drizzle ORM with PostgreSQL
- **Build Tools**: Vite, ESBuild
- **Package Manager**: npm

## Project Structure

```
├── client/          # React frontend application
├── server/          # Express backend API
├── shared/          # Shared types and schemas between frontend/backend
├── attached_assets/ # User uploaded assets and images
└── public/          # Static assets
```

## Recent Changes

- **2025-08-06**: Logo visibility and sizing improvements
  - Fixed logo not displaying by moving PNG file to public directory
  - Increased logo size multiple times to better showcase landscape design (final size: 192px×64px mobile, 224px×80px desktop)
  - Removed white borders and made logo image-only in navbar
  - Updated website content with authentic text from 2025 firm profile document
- **2025-08-06**: Content updates per user requirements
  - Added "Advocates" to firm name on homepage hero section
  - Restored full team of 14 members on team page
  - Updated experience from "5+ Years" to "25+ Years" on team page
- **2025-01-05**: Project migrated from Replit Agent to Replit environment
- Added proper TypeScript configuration and build setup
- Configured client-server separation for security

## User Preferences

- Modern full-stack JavaScript development patterns
- Security-first approach with proper client-server separation
- Minimal file structure with collapsed similar components

## Development

- Run `npm run dev` to start both frontend and backend in development mode
- The application serves both frontend and backend on the same port via Vite proxy
- Database migrations handled through Drizzle Kit

## Security Notes

- Client-server separation implemented
- Environment variables properly configured
- No sensitive data exposed to frontend
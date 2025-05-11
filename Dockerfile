# Use official Node.js image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies separately to cache them
COPY package.json package-lock.json* ./
RUN npm install

# Copy only the necessary source files (excluding via .dockerignore)
COPY . .

# Expose port
EXPOSE 3000

# Use .env files (they are passed at runtime, not baked into image
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=local

# Start the app (you can override this in docker-compose or CLI)
CMD ["npm", "run", "dev"]

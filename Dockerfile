# Use the official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (uses cache)
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the Next.js dev server port
EXPOSE 3000

# Default command (can be overridden in docker-compose)
CMD ["npm", "run", "dev"]
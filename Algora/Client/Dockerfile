FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including dev dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 5173

# Start the development server instead of building
CMD ["npm", "run", "dev"] 
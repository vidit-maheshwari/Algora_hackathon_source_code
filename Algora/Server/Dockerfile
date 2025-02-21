FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and nodemon globally
RUN npm install && npm install -g nodemon

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 5000

# Start the application with nodemon
CMD ["nodemon", "index.js"]

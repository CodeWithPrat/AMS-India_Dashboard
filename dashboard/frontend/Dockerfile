# Use the official Node.js image.
FROM node:20-alpine

# Create and set the working directory.
WORKDIR /app

# Copy the package.json and package-lock.json files.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application files.
COPY . .

# Set environment variables.
ENV PORT=3008
ENV HOST=0.0.0.0

# Expose the port the app runs on.
EXPOSE 3008

# Start the application.
CMD ["npm", "start"]

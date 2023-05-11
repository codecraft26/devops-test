# Use the official Node.js 14.x image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port that the application will be listening on
EXPOSE 8080

# Set the command to run the application
CMD ["node", "server/server.js"]

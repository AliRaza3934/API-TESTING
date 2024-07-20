# Use the official Node.js image as a base
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Playwright dependencies
RUN npx playwright install-deps

# Install Playwright browsers
RUN npx playwright install

# Copy the rest of the application
COPY . .

# Compile TypeScript files
RUN npx tsc

# Command to run the tests
CMD ["node", "dist/test.js"]

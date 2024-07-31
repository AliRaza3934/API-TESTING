# Use the official Node.js image as the base image
FROM node:16

# Create and change to the app directory
WORKDIR /usr/src/Eta+

# Install Playwright dependencies
RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk-bridge2.0-0 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxtst6 \
    libgconf-2-4 \
    libpangocairo-1.0-0 \
    libxrandr2 \
    libasound2 \
    libpangoft2-1.0-0 \
    libgtk-3-0 \
    libxss1 \
    libgbm-dev \
    libpango1.0-0 \
    libcairo2

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Playwright browsers
RUN npx playwright install --with-deps

# Copy the rest of the application code
COPY . .
RUN npm install

RUN npx @playwright/test install



# Build the TypeScript code
RUN npm run build

# Specify the command to run your app
CMD ["npm", "run", "test"]

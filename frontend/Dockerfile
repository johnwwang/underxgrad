# Pull latest official node image
FROM node:latest

# Expose ports
EXPOSE 3000
EXPOSE 35729

# Set working directory
WORKDIR /app

# Add /app/node_modules/.bin to environment variables
ENV PATH /app/node_modules/.bin:$PATH

# Copy package files and install app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install
RUN npm install react-scripts -g
RUN npm install react-router-dom -g
RUN npm install styled-components -g

# Add React app to working directory
ADD . /app

# Start the React app
CMD ["npm", "start"]
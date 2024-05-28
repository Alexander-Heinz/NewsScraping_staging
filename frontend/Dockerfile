# Use the official Node.js runtime as the base image
FROM node:18 as build

RUN mkdir -p /app
# Set the working directory in the container
WORKDIR /app

# sets the environment variable PATH to include the path before the existing PATH.
# This is commonly done in Node.js applications to make it easier to run npm scripts 
# or binaries installed by npm packages locally within the project.
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# EXPOSE 3000
# run app in non-production mode
# CMD ["npm", "start"]

# Build the React app for production
RUN npm run build
# Use Nginx as the production server
FROM nginx:stable-alpine-slim
# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 80 for the Nginx server
EXPOSE 80 
#443

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
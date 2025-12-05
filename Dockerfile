# Use the Node alpine official image
# https://hub.docker.com/_/node
FROM node:lts-alpine AS build

ARG VITE_API_URL
ARG VITE_NODE_ENV
ARG VITE_BACK_URL
ARG VITE_GIT_TOKEN
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_NODE_ENV=$VITE_NODE_ENV
ENV VITE_BACK_URL=$VITE_BACK_URL
ENV VITE_GIT_TOKEN=$VITE_GIT_TOKEN

# Set config
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Create and change to the app directory.
WORKDIR /app

# Copy the files to the container image
COPY package*.json ./

# Install packages
RUN npm install --legacy-peer-deps

# Copy local code to the container image.
COPY . ./

# Build the app.
RUN npm run build

# Use the Caddy image
FROM caddy

# Create and change to the app directory.
WORKDIR /app

# Copy Caddyfile to the container image.
COPY Caddyfile ./

# Copy local code to the container image.
RUN caddy fmt Caddyfile --overwrite

# Copy files to the container image.
COPY --from=build /app/dist ./dist

# Use Caddy to run/serve the app
CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]
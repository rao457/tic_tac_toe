# Use a lightweight web server image, like nginx
FROM nginx:alpine

# Copy your HTML, CSS, JS files to the nginx directory
COPY . /usr/share/nginx/html

# Expose the default port for nginx
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]

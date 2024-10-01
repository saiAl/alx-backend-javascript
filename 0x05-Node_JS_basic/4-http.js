/**
 * This script creates a basic HTTP server using Node.js's built-in `http` module.
 * The server listens for incoming requests on port 1245 and responds with a simple message.
 *
 * Functionality:
 * 1. The `http.createServer` method is used to create an HTTP server.
 * 2. The server listens for incoming HTTP requests, and for every request, it:
 *    - Responds with a status code of 200 (OK).
 *    - Sends the message "Hello Holberton School!" as the response body.
 * 3. The server listens on port 1245 for incoming connections.
 *
 * Usage:
 * - Run the script, and the server will start on localhost:1245.
 * - You can access it via a web browser or tools like `curl` by visiting `http://localhost:1245`.
 */

const http = require('http'); // Import the Node.js HTTP module

// Create an HTTP server that responds to every request with "Hello Holberton School!"
const server = http.createServer((req, res) => {
  // Set the HTTP response status code to 200 (OK)
  res.writeHead(200);
  
  // End the response with the message "Hello Holberton School!"
  res.end("Hello Holberton School!");
});

// Start the server and have it listen on port 1245
server.listen(1245);


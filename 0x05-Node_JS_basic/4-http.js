const http = require('http'); // Import the Node.js HTTP module

// Create an HTTP server that responds to every request with "Hello Holberton School!"
const server = http.createServer((req, res) => {
  // Set the HTTP response status code to 200 (OK)
  res.writeHead(200);

  // End the response with the message "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Start the server and have it listen on port 1245
server.listen(1245);

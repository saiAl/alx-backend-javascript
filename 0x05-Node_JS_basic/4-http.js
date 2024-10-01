const http = require('http'); // Import the Node.js HTTP module

// Create an HTTP server that responds to every request with "Hello Holberton School!"
const app = http.createServer((req, res) => {
  // Set the HTTP response status code to 200 (OK)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // End the response with the message "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Start the server and have it listen on port 1245
app.listen(1245, () => console.log('Server is running'));

module.exports = app;

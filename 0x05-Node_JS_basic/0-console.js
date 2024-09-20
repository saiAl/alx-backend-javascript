const process = require('node:process');

function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}

module.exports = displayMessage;

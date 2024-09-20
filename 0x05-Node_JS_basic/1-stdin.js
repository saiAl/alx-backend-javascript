const process = require('node:process');
const readLine = require('node:readline');

const stdIn = () => {
  // process.stdout.write("Welcome to Holberton School, what is your name?")
  const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  r1.question('Welcome to Holberton School, what is your name?', (name) => {
    console.log(`Your name is: ${name}`);
    console.log(' This important software is now closing');
    r1.close();
  });
};

stdIn();

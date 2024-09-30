/**
 * This script interacts with the user via the terminal. It prompts for the user's name,
 * reads the input, and outputs a response with the entered name.
 * 
 * Once the input is complete (signaled by pressing Ctrl+D), it ends with a closing message.
 */

// Writes a welcome message to the terminal, prompting the user for their name.
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Sets the encoding for the standard input stream (stdin) to UTF-8, so the input is treated as a string.
process.stdin.setEncoding('utf8');

/**
 * Adds a 'readable' event listener to the standard input stream (stdin).
 * 
 * The 'readable' event is triggered when there is data available to read.
 * In this case, we read the input data and check if it is not null.
 * If the input data exists, it trims any extra whitespace (like newlines) and
 * logs the user's name to the console.
 */
process.stdin.on('readable', () => {
  // Reads data from stdin (user's input).
  const data = process.stdin.read();

  // If data is not null, output the user's name.
  if (data !== null) {
    // Logs the trimmed input to avoid any extra newlines or spaces.
    console.log(`Your name is: ${data.toString().trim()}`);
  }
});

/**
 * Adds an 'end' event listener to the standard input stream (stdin).
 * 
 * The 'end' event is triggered when the input stream is closed (usually when the user presses Ctrl+D in the terminal).
 * When the 'end' event is fired, the program outputs a closing message and exits.
 */
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

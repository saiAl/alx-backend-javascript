/**
 * The function `countStudents` processes a CSV file of student data and logs the total number of students,
 * as well as the number of students in each field of study, along with their names.
 *
 * @param {string} path - The path to the CSV database file containing student records.
 *
 * Function behavior:
 * 1. The function reads the file at the specified path asynchronously using `fs.readFile`.
 * 2. If the file cannot be read (e.g., it doesn't exist), it throws an error with the message "Cannot load the database".
 * 3. If the file is successfully read, it:
 *    - Splits the content into an array of lines (rows), where each line corresponds to a student record.
 *    - Extracts the CSV header to identify fields (e.g., first name, last name, etc.).
 *    - Ignores the header row and counts the number of valid student records (non-empty lines).
 *    - Identifies unique fields of study (e.g., CS, SWE) and logs the total number of students in each field.
 *    - Logs the names of students in each field in the format: `Number of students in FIELD: X. List: [list of names]`.
 * 4. CSV file can contain empty lines, which are ignored as invalid student records.
 */

const fs = require("node:fs");

module.exports = function countStudents(path) {
  // Attempt to read the file asynchronously
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      // If file cannot be read, throw an error
      throw new Error("Cannot load the database");
    } else {
      // Convert file data into an array of strings (rows)
      let dataArray = data.split('\n');

      // Helper function to extract header fields
      const extractHeader = (row) => {
        const values = row.split(',');
        return { ...values };
      };

      // Extract the CSV header (first row)
      const header = extractHeader(dataArray[0]);

      // Remove the header from the data array
      dataArray.shift();

      let count = 0; // Count total number of valid student records
      const fields = new Set(); // To track unique fields of study
      const names = new Set();  // To store names and corresponding fields

      // Iterate through the remaining rows of student data
      dataArray.map((row) => {
        if (row !== '') { // Ignore empty lines
          const data = row.split(',');
          // Add the student's field of study to the fields set
          fields.add(data[3]);
          // Store the student's name and field of study in the names set
          names.add({
            name: ` ${data[0]}`, // Ensure the name has leading space for formatting
            field: data[3]
          });
          count += 1; // Increment the valid student count
        }
      });

      // Log the total number of students
      console.log(`Number of students: ${count}`);

      // Loop through each unique field of study
      for (const field of fields) {
        let fieldCount = 0;
        const arr = []; // Array to store names of students in this field

        // Loop through all names and match the field of study
        names.forEach((data) => {
          if (data.field === field) {
            arr.push(data.name); // Add student's name to the list
            fieldCount += 1; // Increment count for this field
          }
        });

        // Log the number of students and their names in the field
        console.log(`Number of students in ${f}: ${fieldCount}. List:${arr}`);
      }
    }
  });
};

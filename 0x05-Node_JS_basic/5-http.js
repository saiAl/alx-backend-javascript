const http = require('http'); // Import the Node.js HTTP module
const fs = require('fs');


const app = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    try {
      const data = fs.readFile(path, 'utf8');

      const arr = data.split('\n');
      const extract = (row) => {
        const value = row.split(',');
        return { ...value };
      };

    const headers = extract(arr[0]);
    arr.shift();

    let count = 0;
    const fields = new Set();
    const names = new Set();

    arr.map((row) => {
      if (row !== '') {
        const data = row.split(',');
        fields.add(data[3]);
        names.add({ name: ` ${data[0]}`, field: data[3] });
        count += 1;
      }
    });
    console.log(r)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is the list of our students');
  } 
});

// Start the server and have it listen on port 1245
app.listen(1245, () => console.log('Server is running'));

module.exports = app;





function countStudents(path) {

	
    // console.log(`Number of students: ${count}`);
    
//    for (const field of fields) {
//      let fieldCount = 0;
//      const arr = [];
//      names.forEach((data) => {
//        if (data.field === field) {
//          arr.push(data.name);
//          fieldCount += 1;
//        }
//      });
//      console.log(`Number of students in ${field}: ${fieldCount}. List:${arr}`);
//    }

    return JSON.stringfy({ count: count, fields: fields, names: names }); } catch (error) {
    throw new Error('Cannot load the database');
  }
};

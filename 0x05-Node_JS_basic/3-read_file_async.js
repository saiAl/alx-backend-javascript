const fs = require('node:fs/promises');

module.exports = async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const arr = await data.split('\n');
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

    console.log(`Number of students: ${count}`);
    for (const field of fields) {
      let fieldCount = 0;
      const arr = [];
      names.forEach((data) => {
        if (data.field === field) {
          arr.push(data.name);
          fieldCount += 1;
        }
      });
      console.log(`Number of students in ${field}: ${fieldCount}. List:${arr}`);
    }

    return data;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

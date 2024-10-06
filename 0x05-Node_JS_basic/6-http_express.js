const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('server is running on port 1245');
});

module.exports = app;

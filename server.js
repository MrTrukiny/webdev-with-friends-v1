const express = require('express');

const app = express();

const PORT = 5000;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Working!');
});

app.get('/contact', (req, res) => {
  res.send('My email: a@a.com');
});

app.listen(PORT, hostname, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

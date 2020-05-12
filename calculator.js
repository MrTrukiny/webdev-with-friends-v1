const express = require('express');

const app = express();
const PORT = 3500;

app.get('/', (req, res) => {
  console.log(__dirname + '\\index.html');
  res.status(200).sendFile(__dirname + '\\index.html');
});

app.post('/', (req, res) => {
  console.log(req);
  res.send('Your calculator returns: ');
});

app.listen(PORT, () => {
  console.log('Express is running: ' + PORT);
});

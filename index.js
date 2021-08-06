const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send(JSON.stringify({ message: 'Hello World!' }));
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/5.html");
});

app.listen(3333, () => {
  console.log('Application listening on port 3333!');
});


const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/webpack', (request, response) => {
  response.sendFile(path.join(__dirname, './dist/index.html'));
});

app.use(express.static(path.join(__dirname, './dist')));

app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});

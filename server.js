const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.get('/home', (request, response) => {
  response.send('Homepage');
});

app.listen(port, () => {
  console.log(`Express is running at ${port}`);
});

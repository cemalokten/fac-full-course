const express = require('express');
const { nextTick } = require('process');
const dogs = require('./dogs.js');

const server = express();

server.get('/:input', (request, response) => {
  const input = request.query.input || '';

  const dogsArray = Object.values(dogs);
  let listItems = '';
  for (const dog of dogsArray) {
    const match = (listItems += `<li>${dog.name}</li>`);
  }
  const dogList = `<ul>${listItems}</ul>`;

  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
      <ul>${dogList}</ul>

    </body>
  </html>
  `;
  const input = request.params.input;
  console.log(input);
  response.send(html);
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

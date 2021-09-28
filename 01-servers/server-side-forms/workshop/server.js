const express = require('express');

const posts = require('./posts.js');

const server = express();

server.get('/', (request, response) => {
  const search = request.query.search || '';

  let listItems = '';

  for (const post of Object.values(posts)) {
    const match = post.title.toLowerCase().includes(search.toLowerCase());

    if (match || !search) {
      listItems += `<li>${post.title} - ${post.body}</li>`;
    }
  }

  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
    
      <ul>${listItems}</ul>

         <form method="POST">
        <label id="search">Search dogs</label>
        <input id="search" type="search" name="search" placeholder="E.g. rover">
        <button>Search</button>
      </form>
    </body>
  </html>`;

  response.send(html);
});

const PORT = 3333;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

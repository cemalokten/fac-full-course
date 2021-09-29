const express = require('express');
const posts = require('./posts.js');

const server = express();

server.get('/', (request, response) => {
  const search = request.query.search || '';

  let listItems = '';

  for (const post of Object.values(posts)) {
    const match = post.title.toLowerCase().includes(search.toLowerCase());

    if (match || !search) {
      listItems += `<li>${post.body}</li>`;
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
      <form >
        <label id="search">Search dogs</label>
        <input id="search" type="search" name="search" placeholder="E.g. rover">
        <button>Search</button>
      </form>

    </body>
  </html>`;

  response.send(html);
});

server.get('/add-post', (request, response) => {
  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
   <form method="POST">
        <label id="create-post" >create-post</label>
        <input id="create-post" type="create-post" name=body placeholder="E.g. rover">
        <button>create-post</button>
      </form>
    </body>
  </html>`;

  response.send(html);
});

const bodyParser = express.urlencoded({ extended: false });

server.post('/add-post', bodyParser, (request, response) => {
  const newPost = request.body;
  console.log(newPost);
  console.log(posts);
});

const PORT = 3333;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

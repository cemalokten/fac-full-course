const dogs = require("../dogs.js");

function get(request, response) {
  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
      <h1>Create a dog</h1>
      <form method="POST">
        <label id="name">Dog name</label>
        <input id="name" name="name">
        <label id="breed">Dog breed</label>
        <input id="breed" name="breed">
        <button>Search</button>
      </form>
    </body>
  </html>
  `;
  response.end(html);
}

function post(request, response) {
  const newDog = request.body;
  if (!newDog.name || !newDog.breed) {
    response.redirect("/add-dog/error");
  } else {
    const name = newDog.name.toLowerCase();
    dogs[name] = newDog;
    response.redirect(`/dogs/${newDog.name}`);
  }
}

function error(request, response) {
  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <h1>Submission error</h1>
      <p>Something went wrong with your submission, sorry!</p>
    </body>
  </html>
  `;
  response.end(html);
}

module.exports = { get, post, error };

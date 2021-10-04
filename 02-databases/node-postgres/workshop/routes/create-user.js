const db = require("../database/connection");

function get(request, response) {
  response.send(/*html*/ `
    <form action="create-user" method="POST">
      <p>
        <label for="username">Username</label>
        <input id="username" name="username">
      </p>
      <p>
        <label for="age">Age</label>
        <input id="age" name="age" type="number">
      </p>
      <p>
        <label for="blog">Post</label>
        <input id="blog" name="blog" type="text">
      </p>
         <p>
        <label for="userid">Post</label>
        <input id="userid" name="userid" type="number">
      </p>
      <p>
        <button type="submit">Create user</button>
      </p>
    </form>
  `);
}

function post(request, response) {
  db.query("INSERT INTO users (username, age) VALUES ($1, $2); INSERT INTO blog_posts (text_content, user_id) VALUES ($3, (SELECT id FROM users WHERE username = $1));", [request.body.username, request.body.age, request.body.blog]);
  console.log(request.body); // e.g. { username: "oli", ... }
  response.redirect("/");
}

// function postArticle(request, response) {
//   db.query(");
//   console.log(request.body); // e.g. { username: "oli", ... }
//   response.redirect("/");
// }



module.exports = { get, post};

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
        <label for="blog">Blog</label>
        <input id="blog" name="blog" type="textarea">
      </p>
      <p>
        <button type="submit">Create user</button>
      </p>
    </form>
  `);
}

function post(request, response) {

  


  db.query('BEGIN', err => {
    

      const getUserID = 'SELECT user_id FROM users WHERE username = ?'
      db.query(getUserID, [request.body.username]).then((value) => {
        const queryText = 'INSERT INTO users (username, age) VALUES ($1, $2)';
        db.query(queryText, [request.body.username, request.body.age])
      })

      
    client.query(insertPhotoText, insertPhotoValues, (err, res) => {
        if (shouldAbort(err)) return
        client.query('COMMIT', err => {
          if (err) {
            console.error('Error committing transaction', err.stack)
          }
          done()
        })
      })
    })

  const insertBlogPost = 'INSERT INTO blog_posts (text_content, user_id) VALUES ($1, $2)'
      const insertPhotoValues = [request.body.blog, ]

  console.log(request.body); // e.g. { username: "oli", ... }
  response.redirect("/");
}




module.exports = { get, post };

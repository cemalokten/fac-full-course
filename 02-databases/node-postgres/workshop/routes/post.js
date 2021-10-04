const db = require("../database/connection");

function get(request, response) {
    const selectPost = `
    SELECT blog_posts.text_content, users.username 
    FROM blog_posts 
    JOIN users ON blog_posts.user_id = users.id 
    ORDER BY blog_posts.id DESC`

  db.query(selectPost).then((result) => {
    const posts = result.rows;
    const postList = posts.map((post) => 
      `<li>
        <p>${post.text_content}</p>
        <p>${post.username}</p>
       </li>`
    )
    response.send(`<ul>${postList.join('')}</ul>`);
  }); 
}

module.exports = {get};
const layout = require("../layout.js");

function get(request, response) {
try {
  const html = layot(`<h1>Gonna error</h1>`);
  response.send(html);
} catch (error ) {
  response.status(500).send(`Server Error`);

}
}

module.exports = { get };

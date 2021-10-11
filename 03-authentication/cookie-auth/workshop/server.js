const express = require("express");
const cookieParser = require("cookie-parser");
const server = express();
server.use(cookieParser('randomstring'));


const crypto = require("crypto");
let sessions = {}


// Manual method
// server.get("/example", (request, response) => {
//   response.set(
//     "set-cookie",
//     "hello=this is my cookie; HttpOnly; Max-Age=60; SameSite=Lax"
//   );
//   response.redirect("/");
// });

server.get("/", (request, response) => {
  const sid = request.signedCookies.sid;
  if (sid) {
    const userInfo = sessions[sid];
    console.log(userInfo);
    response.send(`<h1>Hello ${userInfo.username} 🥳</h1>`);
  } else {
    response.send(`<h1>You're Not Logged In 😔</h1>`);
  }
  
});

// With express helper
server.get("/example", (request, response) => {
  response.cookie("hello", "this is my cookie 🍪", {
    httpOnly: true,
    maxAge: 1000 * 60, // 60,000ms (60s)
    sameSite: "lax",
    signed: true
  });
  response.redirect("/");
});

server.get("/remove", (request, response) => {
  response.clearCookie("hello");
  response.redirect("/");
});

server.get('/login', (request, response) => {
  const sid = crypto.randomBytes(18).toString("base64");
  sessions[sid] = { id: 1, username: "Bobby", admin: true };
  response.cookie('sid', sid, {
    httpOnly: true,
    maxAge: 1000 * 60, // 60,000ms (60s)
    signed: true
  })
  response.redirect("/");
})

server.get('/logout', (request, response) => {
  const sid = request.signedCookies.sid;
  delete sessions[sid]
  response.clearCookie("sid");
  response.redirect("/");
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

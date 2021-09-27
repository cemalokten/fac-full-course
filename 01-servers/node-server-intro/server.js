const express = require("express");

const server = express();

function logger(request, response, next) {
	console.log(request.method + " " + request.url);
	next();
}

const staticHandler = express.static("public");

server.use(staticHandler);

server.use(logger);

server.get("/", (request, response) => {
	let time = new Date().toLocaleTimeString();
	response.status(404);
	response.send(`<marquee>BREAD TIME: ${time} 🍞</marquee>`);
});

server.get("/json", (request, response) => {
	response.send({ message: "Hello" });
});

server.get("/redirects", (request, response) => {
	response.redirect("/");
});

server.get("/users/:name", (request, response) => {
	const name = request.params.name;
	response.send(`<marquee>Hello ${name}</marquee>`);
});

server.use((request, response) => {
	response.status(404).send("<marquee>NOT BREAD :gun::gun:</marquee>");
});

const bodyParser = express.urlencoded();

server.post("/submit", bodyParser, (request, response) => {
	console.log(request.body);
	response.send("thanks for submitting");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

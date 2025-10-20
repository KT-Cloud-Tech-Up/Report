import http from "http";

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain; charset=utf-8");
	res.end("Node.js Running!");
});

server.listen(3000, () => {
	console.log("server is running on 3000 ~~");
});


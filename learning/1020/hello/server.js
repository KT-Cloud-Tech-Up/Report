import http from "http";

// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader("Content-Type", "text/plain; charset=utf-8");
// 	res.end("Node.js Running!");
// });

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(JSON.stringify({ message: "Hello Node.js ~~" }));
  } else if (req.url === "/bye") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(JSON.stringify({ message: "Bye Node.js ~~" }));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("server is running on 3000 ~~");
});

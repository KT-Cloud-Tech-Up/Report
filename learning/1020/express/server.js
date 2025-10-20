// import http from "http";
import express from "express";
import postRoutes from "./routes/post.routes.js";

const app = express();

// express 미들웨어 활용
app.use("/api/v1/posts", postRoutes);

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   res.end("OK!");
// });

// app.get("/", (req, res) => {
//   res.send("OK!");
// });

// // express 라우팅 활용
app.get("/users");
app.post("/user/create", (req, res) => {
  res.send("사용자 생성");
});
app.get("/users/:id", (req, res) => {
  res.send(`특정 사용자 정보: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("OK server is starting ~~");
});

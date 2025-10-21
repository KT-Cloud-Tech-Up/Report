import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import postRoutes from "./routes/post.routes.js";

dotenv.config();
connectDB();
const app = express();

// express 미들웨어 활용
app.use(express.json());
app.use("/api/v1/posts", postRoutes);

// // express 라우팅 활용
// app.get("/users");
// app.post("/user/create", (req, res) => {
//   res.send("사용자 생성");
// });
// app.get("/users/:id", (req, res) => {
//   res.send(`특정 사용자 정보: ${req.params.id}`);
// });

app.listen(3000, () => {
  console.log("MongoDB server is running on port 3000 ~~~~~");
});

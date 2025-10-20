import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const postRoutes = express.Router();

postRoutes.get("/", getPosts);
postRoutes.get("/:id", getPostById);
postRoutes.post("/", createPost);
postRoutes.put("/:id", updatePost);
postRoutes.delete("/:id", deletePost);

export default postRoutes;

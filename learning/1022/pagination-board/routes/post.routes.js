import express from "express";
import { getPostsForHome } from "../controller/post.controller.js";

// 전체 라우팅할 express router 생성
const postRoutes = express.Router();
postRoutes.get("/", getPostsForHome); // home 페이지에 노출될 게시글 목록 api 라우팅 설정

export default postRoutes;

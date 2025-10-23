// import Post from "../models/post.model.js";

// export const getPosts = async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, data: posts });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

import postService from "../services/post-service.js";

// home 페이지 노출될 게시글 목록 리스트 호출 api controller
export const getPostsForHome = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // 쿼리 스트링으로 요청받은 페이지 번호
    const search = req.query.search || ""; // 쿼리 스트링으로 요청받은 검색어

    // 게시글 목록 service
    const [posts, paginator] = await postService.list(page, search);

    // 정상적으로 게시글 목록 리스트를 호출한 후, res 응답에 렌더링 구현
    // homt 페이지에 title, search, posts, paginator 데이터들을 넘기기
    res.render("home", {
      title: "게시판",
      search: search,
      posts: posts,
      paginator: paginator,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

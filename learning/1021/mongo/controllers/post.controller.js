import Post from "../models/post.models.js";

// let posts = [
//   { id: 1, title: "First Post", content: "This is a test post1" },
//   { id: 2, title: "Second Post", content: "This is a test post2" },
//   { id: 3, title: "Third Post", content: "This is a test post3" },
// ];

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // res.json(posts);
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // const post = posts.find((post) => post.id === parseInt(req.params.id));
  // if (!post) {
  //   res.status(404).json({ message: "Post not found" });
  //   return;
  // }
  // res.json(post);
};

// 생성
export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.create({ title, content });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // const { title, content } = req.body;
  // const newPost = {
  //   id: posts.sort((a, b) => a.id - b.id)[posts.length - 1].id + 1,
  //   title,
  //   content,
  // };
  // posts.push(newPost);
  // res.status(201).json({ success: true, data: newPost });
};

// 수정
export const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // const id = parseInt(req.params.id);
  // const index = posts.findIndex((p) => p.id === id);
  // if (index === -1)
  //   return res.status(404).json({ success: false, message: "게시글 없음" });

  // posts[index] = { ...posts[index], ...req.body };
  // res.json({ success: true, data: posts[index] });
};

// 삭제
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: deletedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // const id = parseInt(req.params.id);
  // posts = posts.filter((p) => p.id !== id);
  // res.json({ success: true, message: "게시글 삭제 완료" });
};

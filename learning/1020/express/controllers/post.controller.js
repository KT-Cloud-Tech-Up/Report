let posts = [
  { id: 1, title: "First Post", content: "This is a test post1" },
  { id: 2, title: "Second Post", content: "This is a test post2" },
  { id: 3, title: "Third Post", content: "This is a test post3" },
];

export const getPosts = (req, res) => {
  res.json(posts);
};

export const getPostById = (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).json({ message: "Post not found" });
    return;
  }
  res.json(post);
};

// 생성
export const createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.sort((a, b) => a.id - b.id)[posts.length - 1].id + 1,
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json({ success: true, data: newPost });
};

// 수정
export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1)
    return res.status(404).json({ success: false, message: "게시글 없음" });

  posts[index] = { ...posts[index], ...req.body };
  res.json({ success: true, data: posts[index] });
};

// 삭제
export const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((p) => p.id !== id);
  res.json({ success: true, message: "게시글 삭제 완료" });
};

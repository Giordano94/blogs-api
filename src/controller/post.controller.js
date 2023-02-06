const postService = require('../service/post.service');

const getPosts = async (_req, res) => {
  const { type, message } = await postService.getPosts();
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

module.exports = { getPosts };
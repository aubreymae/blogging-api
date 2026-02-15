import { addPost, getPost } from "../services/post.service.js";

async function createPostHandler(req, res) {
  try {
    const post = await addPost(req.body);
    return res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

async function getPostHandler(req, res) {
  try {
    const posts = await getPost();
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export { createPostHandler, getPostHandler };

import { addPost } from "../services/post.service.js";

async function createPostHandler(req, res) {
  try {
    const post = await addPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export { createPostHandler };

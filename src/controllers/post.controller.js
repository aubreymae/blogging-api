import {
  addPost,
  getPost,
  getPostById,
  updatePost,
} from "../services/post.service.js";

async function createPostHandler(req, res) {
  try {
    const post = await addPost(
      req.params.title,
      req.params.content,
      req.params.category,
      req.params.tags,
    );
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

async function getPostByIdHandler(req, res) {
  try {
    const post = await getPostById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

async function putPostHandler(req, res) {
  try {
    const updatedPost = await updatePost(
      req.params.id,
      req.params.title,
      req.params.content,
      req.params.category,
      req.params.tags,
    );
    return res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export {
  createPostHandler,
  getPostHandler,
  getPostByIdHandler,
  putPostHandler,
};

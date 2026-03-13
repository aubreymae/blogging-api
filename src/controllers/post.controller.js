import {
  addPostService,
  removePostService,
  updatePostService,
  getPostService,
  getAllPostsService,
  getPostsByTermService,
} from "../services/post.service.js";

async function createPostHandler(req, res) {
  try {
    const post = await addPostService(
      req.body.title,
      req.body.content,
      req.body.category,
      req.body.tags,
    );
    return res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

async function getPostHandler(req, res) {
  if (req.query.term) {
    try {
      // find and return posts containing the term
      const posts = await getPostsByTermService(req.query.term);
      return res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  } else {
    try {
      const posts = await getAllPostsService();
      return res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}

async function getPostByIdHandler(req, res) {
  try {
    const id = parseInt(req.params.id);
    const post = await getPostService(id);
    return res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

async function putPostHandler(req, res) {
  try {
    const id = parseInt(req.params.id);
    const updatedPost = await updatePost(
      id,
      req.body.title,
      req.body.content,
      req.body.category,
      req.body.tags,
    );
    return res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

async function deletePostHandler(req, res) {
  try {
    const id = parseInt(req.params.id);
    const result = await removePostService(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

async function updatePostHandler(req, res) {
  try {
    const id = parseInt(req.params.id);
    const result = await updatePostService(
      id,
      req.body.title,
      req.body.content,
      req.body.category,
      req.body.tags,
    );
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export {
  createPostHandler,
  deletePostHandler,
  updatePostHandler,
  getPostByIdHandler,
  getPostHandler,
};

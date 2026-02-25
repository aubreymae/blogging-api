import {
  addPost,
  getPost,
  getPostById,
  updatePost,
  deletePost,
  getPostsContainingTerm,
} from "../services/post.service.js";

async function createPostHandler(req, res) {
  try {
    const post = await addPost(
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
      const posts = await getPostsContainingTerm(req.query.term);
      return res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  } else {
    try {
      const posts = await getPost();
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
    const post = await getPostById(id);
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
    const result = await deletePost(id);
    return res.status(200).json(result);
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
  deletePostHandler,
};

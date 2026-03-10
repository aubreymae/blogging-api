import express from "express";
import {
  createPostHandler,
  deletePostHandler,
  updatePostHandler,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", createPostHandler);
// router.get("/", getPostHandler);
// router.get("/:id", getPostByIdHandler);
router.put("/:id", updatePostHandler);
router.delete("/:id", deletePostHandler);

export default router;

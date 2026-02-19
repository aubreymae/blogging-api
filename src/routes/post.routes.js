import express from "express";
import {
  createPostHandler,
  getPostHandler,
  getPostByIdHandler,
  putPostHandler,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", createPostHandler);
router.get("/", getPostHandler);
router.get("/:id", getPostByIdHandler);
router.put("/:id", putPostHandler);

export default router;

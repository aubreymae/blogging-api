import express from "express";
import {
  createPostHandler,
  getPostHandler,
  getPostByIdHandler,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", createPostHandler);
router.get("/", getPostHandler);
router.get("/:id", getPostByIdHandler);

export default router;

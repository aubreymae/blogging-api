import express from "express";
import {
  createPostHandler,
  getPostHandler,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", createPostHandler);
router.get("/", getPostHandler);

export default router;

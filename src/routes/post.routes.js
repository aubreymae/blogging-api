import express from "express";
import { createPostHandler } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", createPostHandler);
// router.get("/", getPostHandler);
// router.get("/:id", getPostByIdHandler);
// router.put("/:id", putPostHandler);
// router.delete("/:id", deletePostHandler);

export default router;

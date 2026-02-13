import express from "express";
import { createPostHandler } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", createPostHandler);

export default router;

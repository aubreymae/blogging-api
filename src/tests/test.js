import { createPostHandler } from "../controllers/post.controller.js";
import { addPost } from "../services/post.service.js";

const example = {
  title: "My First Blog Post",
  content: "This is the content of my first blog post.",
  category: "Technology",
  tags: ["Tech", "Programming"],
};

const req = {
  body: example,
};

const res = {
  status: function (code) {
    this.statusCode = code;
    return this;
  },
  json: function (payload) {
    console.log("Response Status:", this.statusCode);
    console.log("Response Payload:", payload);
  },
};

createPostHandler(req, res);

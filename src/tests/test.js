import {
  createPostHandler,
  getPostHandler,
  getPostByIdHandler,
  putPostHandler,
} from "../controllers/post.controller.js";

const example = {
  title: "My First Blog Post",
  content: "This is the content of my first blog post.",
  category: "Technology",
  tags: ["Tech", "Programming"],
};

const req = {
  body: example,
  params: {
    id: "09625d5d-6c28-4e49-9d34-4ca632f26ded",
    title: "My First Blog Post (Updated)",
    content: "This is the content of my first blog post. (Updated)",
    category: "(Updated)",
    tags: ["Tech", "Programming", "Recent"],
  },
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

// createPostHandler(req, res);
// getPostHandler(req, res);
// getPostByIdHandler(req, res);
putPostHandler(req, res);

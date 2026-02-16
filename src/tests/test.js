import {
  createPostHandler,
  getPostHandler,
  getPostByIdHandler,
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
getPostByIdHandler(req, res);

import express from "express";
import { addPost } from "./src/models/index.js";

const app = express();
const port = 3000;

const example = {
  title: "My First Blog Post",
  content: "This is the content of my first blog post.",
  category: "Technology",
  tags: ["Tech", "Programming"],
};

const newItem = {
  title: "Another day, another dollar",
  content: "Well, this is the second post.",
  category: "Life",
  tags: ["Daily", "Ramblings"],
};

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send("Hello World");
  addPost(newItem);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}/`);
});

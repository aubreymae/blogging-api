import crypto from "crypto";

class Post {
  constructor(id, title, content, category, tags) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.category = category;
    this.tags = tags;
    this.createdAt = new Date();
  }
}

function createPost(id, title, content, category, tags) {
  const newPost = new Post(id, title, content, category, tags);

  return newPost;
}

export { createPost };

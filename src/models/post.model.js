import crypto from "crypto";

class Post {
  constructor(title, content, category, tags) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.content = content;
    this.category = category;
    this.tags = tags;
    this.createdAt = new Date();
  }
}

function createPost(singlePost) {
  const newPost = new Post(
    singlePost.title,
    singlePost.content,
    singlePost.category,
    singlePost.tags,
  );

  return newPost;
}

export { createPost };

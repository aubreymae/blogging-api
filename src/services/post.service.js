import { createPost } from "../models/post.model.js";
import { getData, writeFile } from "../db/file.js";

async function addPost(newItem) {
  let db = await getData();
  const newPost = createPost(newItem);
  await writeFile(db, newPost);

  return newPost;
}

async function getPost() {
  let db = await getData();
  return db;
}

export { addPost, getPost };

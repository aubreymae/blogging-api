import { createPost } from "../models/post.model.js";
import {
  getData,
  writeFile,
  searchDB,
  replaceItem,
  generateID,
} from "../db/file.js";

async function addPost(title, content, category, tags) {
  let db = await getData();
  const currId = await generateID(db);
  const newPost = createPost(currId, title, content, category, tags);
  await writeFile(db, newPost);

  return newPost;
}

async function getPost() {
  let db = await getData();
  return db;
}

async function getPostById(id) {
  let db = await getData();
  const result = await searchDB(db, id);
  return result;
}

async function updatePost(id, title, content, category, tags) {
  let db = await getData();
  const newPost = createPost(id, title, content, category, tags);

  return replaceItem(db, id, newPost);
}

export { addPost, getPost, getPostById, updatePost };

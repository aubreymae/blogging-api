import { createPost } from "../models/post.model.js";
import {
  getData,
  writeFile,
  searchDB,
  replaceItem,
  generateID,
  deleteItem,
  getPostsByTerm,
} from "../db/file.js";
import { insertPost } from "../db/index.js";

async function addPost(title, content, category, tags) {
  // let db = await getData();
  // const currId = await generateID(db);
  // const newPost = createPost(currId, title, content, category, tags);
  // await writeFile(db, newPost);
  const newPost = createPost(title, content, category, tags);
  const result = await insertPost(newPost);

  return result;
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

  return await replaceItem(db, id, newPost);
}

async function deletePost(id) {
  let db = await getData();
  return await deleteItem(db, id);
}

async function getPostsContainingTerm(term) {
  let db = await getData();

  return await getPostsByTerm(db, term);
}

export {
  addPost,
  getPost,
  getPostById,
  updatePost,
  deletePost,
  getPostsContainingTerm,
};

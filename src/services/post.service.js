import { createPost } from "../models/post.model.js";
import {
  checkCategory,
  insertPost,
  checkTags,
  insertPostTag,
  deletePostByID,
  updatePost,
} from "../db/index.js";

async function addPostService(title, content, category, tags) {
  const newPost = createPost(title, content, category, tags);
  const categoryID = await checkCategory(category);
  const postID = await insertPost(newPost, categoryID);

  for (const tag of tags) {
    const tagID = await checkTags(tag);
    await insertPostTag(postID, tagID);
  }

  return postID;
}

async function removePostService(id) {
  const result = await deletePostByID(id);

  return result;
}

async function updatePostService(id, title, content, category, tags) {
  const result = await updatePost(id, title, content, category, tags);

  return result;
}

/*-- Writes into local file --*/

// async function addPost(title, content, category, tags) {
//   let db = await getData();
//   const currId = await generateID(db);
//   const newPost = createPost(currId, title, content, category, tags);
//   await writeFile(db, newPost);

//   return result;
// }

// async function getPost() {
//   let db = await getData();
//   return db;
// }

// async function getPostById(id) {
//   let db = await getData();
//   const result = await searchDB(db, id);
//   return result;
// }

// async function updatePost(id, title, content, category, tags) {
//   let db = await getData();
//   const newPost = createPost(id, title, content, category, tags);

//   return await replaceItem(db, id, newPost);
// }

// async function deletePost(id) {
//   let db = await getData();
//   return await deleteItem(db, id);
// }

// async function getPostsContainingTerm(term) {
//   let db = await getData();

//   return await getPostsByTerm(db, term);
// }

export { addPostService, removePostService, updatePostService };

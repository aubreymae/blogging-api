import { createPost } from "./post.model.js";
import { getData, writeFile } from "../db/file.js";

function addPost(newItem) {
  let db = getData();
  db.push(createPost(newItem));
  writeFile(db);
  console.log(db);
}

export { addPost };

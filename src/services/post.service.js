import { createPost } from "./post.model.js";
import { getData, writeFile } from "../db/file.js";

async function addPost(newItem) {
  let db = await getData();
  db.push(createPost(newItem));
  await writeFile(db);
  console.log(db);
}

export { addPost };

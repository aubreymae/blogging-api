import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filepath = join(__dirname, "..", "data", "data.json");

let dbArray = [];

/*
 * Returns data from existing file
 */
async function getData() {
  try {
    const fileContents = await fs.readFile(filepath, "utf-8");

    if (!fileContents) {
      return [];
    } else {
      const allPosts = JSON.parse(fileContents);
      return allPosts;
    }
  } catch (error) {
    await writeFile([], null);
    return [];
  }
}

/*
 * Write into file
 */
async function writeFile(db, item) {
  if (db.length === 0 && item !== null) {
    console.log("Empty file; writing data...");
    await fs.writeFile(filepath, JSON.stringify([item]));
  } else if (item !== null) {
    console.log("Pushing into current DB...");
    db.push(item);
    await fs.writeFile(filepath, JSON.stringify(db));
  }
}

/*
 * Write into file
 */
async function searchDB(db, postId) {
  const result = db.find((post) => post.id === `${postId}`);
  return result;
}

/*
 *
 */
async function replaceItem(db, postId, newPost) {
  const index = db.findIndex((post) => post.id === `${postId}`);

  db[index] = newPost;
  await fs.writeFile(filepath, JSON.stringify([db]));
  return newPost;
}

export { getData, writeFile, searchDB, replaceItem };

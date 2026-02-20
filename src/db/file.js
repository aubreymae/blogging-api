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
 * Search for post by ID then return it
 */
async function searchDB(db, postId) {
  const result = db.find((post) => post.id === postId);
  return result;
}

/*
 * Replace item in DB by given ID with a new item
 */
async function replaceItem(db, postId, newPost) {
  const index = db.findIndex((post) => post.id === postId);

  db[index] = newPost;
  await fs.writeFile(filepath, JSON.stringify(db));
  return newPost;
}

/*
 * Generate ID for post
 */
async function generateID(db) {
  try {
    if (db.length === 0) {
      return 1;
    } else {
      return db[db.length - 1].id + 1;
    }
  } catch (error) {
    console.error(error);
  }
}

async function deleteItem(db, id) {
  if (db.length === 0 || id > db.length) {
    throw new Error("Database is empty.");
  }

  try {
    const deletedItem = db.splice(
      db.findIndex((post) => post.id === id),
      1,
    );

    if (deletedItem !== -1) {
      await fs.writeFile(filepath, JSON.stringify(db));
    }

    return deletedItem;
  } catch (error) {
    console.error(error);
  }
}

export { getData, writeFile, searchDB, replaceItem, generateID, deleteItem };

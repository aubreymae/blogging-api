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
    const isEmpty = await fs.readFile(filepath, "utf-8");

    if (isEmpty) {
      return [];
    } else {
      const allPosts = JSON.parse(fileContents);
      console.log(allPosts);
      return allPosts;
    }
  } catch (error) {
    writeFile(dbArray);
    return dbArray;
  }
}

/*
 * Checks if a file already exists; otherwise creates one
 */
async function fileExists(currentPath) {
  await fs.stat(currentPath, (err, stats) => {
    if (err) {
      return false;
    }
    return true;
  });
}

async function writeFile(item) {
  await fs.writeFile(filepath, JSON.stringify(item));
}

export { getData, writeFile };

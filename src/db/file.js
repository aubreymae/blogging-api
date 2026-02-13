import { promise as fs } from "fs";
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
    if (fileExists(filepath)) {
      const fileContents = await fs.readFile(filepath, "utf-8");
      const allPosts = JSON.parse(fileContents);
      return allPosts;
    } else {
      throw new Error("File does not exist!");
    }
  } catch (error) {
    console.error(error);
  }
}

/*
 * Checks if a file already exists; otherwise creates one
 */
async function fileExists(currentPath) {
  if (fs.existsSync(currentPath)) {
    return true;
  } else {
    await fs.writeFile(currentPath, JSON.stringify(dbArray));
    return false;
  }
}

async function writeFile(item) {
  await fs.writeFile(filepath, JSON.stringify(item));
}

export { getData, writeFile };

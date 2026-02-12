import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filepath = join(__dirname, "..", "data", "data.json");

let dbArray = [];

/*
 * Returns data from existing file
 */
function getData() {
  try {
    if (fileExists(filepath)) {
      const fileContents = fs.readFileSync(filepath, "utf-8");
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
function fileExists(currentPath) {
  if (fs.existsSync(currentPath)) {
    return true;
  } else {
    fs.writeFileSync(currentPath, JSON.stringify(dbArray));
    return false;
  }
}

function writeFile(item) {
  fs.writeFileSync(filepath, JSON.stringify(item));
}

export { getData, writeFile };

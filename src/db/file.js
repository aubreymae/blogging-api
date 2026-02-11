import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createPost } from "../models/post.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filepath = join(__dirname, "..", "data", "data.json");

const example = {
  title: "My First Blog Post",
  content: "This is the content of my first blog post.",
  category: "Technology",
  tags: ["Tech", "Programming"],
};

const newItem = {
  title: "Another day, another dollar",
  content: "Well, this is the second post.",
  category: "Life",
  tags: ["Daily", "Ramblings"],
};

let dbArray = [];

/*
 * Returns data from existing file
 */
function getData(currentPath) {
  try {
    const fileContents = fs.readFileSync(currentPath, "utf-8");
    const allPosts = JSON.parse(fileContents);
    return allPosts;
  } catch (error) {
    console.error(error);
  }
}

/*
 * Checks if a file already exists; otherwise creates one
 */
function createFile() {
  if (fs.existsSync(filepath)) {
    console.log("File exists!");
    const fileData = getData(filepath);
    fileData.push(createPost(newItem));

    fs.writeFileSync(filepath, JSON.stringify(fileData));
    console.log(getData(filepath));
  } else {
    console.log("File does not exist!");

    dbArray.push(createPost(example));
    fs.writeFileSync(filepath, JSON.stringify(dbArray));
  }
}

export { createFile };

import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filepath = join(__dirname, "..", "data", "data.json");

const example = [
  {
    id: "1",
    content: "Hello World",
  },
  {
    id: "2",
    content: "What's up?",
  },
];

const newItem = [
  {
    id: "0",
    content: "New add",
  },
];

function getData(currentPath) {
  try {
    const fileContents = fs.readFileSync(currentPath, "utf-8");
    const allPosts = JSON.parse(fileContents);
    return allPosts;
  } catch (error) {
    console.error(error);
  }
}

function createFile() {
  if (fs.existsSync(filepath)) {
    console.log("File exists!");
    const fileData = getData(filepath);
    fileData.push(newItem);

    fs.writeFileSync(filepath, JSON.stringify(fileData));
    console.log(getData(filepath));
  } else {
    console.log("File does not exist!");
    fs.writeFileSync(filepath, JSON.stringify(example));
  }
}

export { createFile };

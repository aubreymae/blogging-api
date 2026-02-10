import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, "..", "data", "data.json");

const allPosts = [
  {
    id: "1",
    content: "Hello World",
  },
];

function createFile() {
  if (fs.existsSync(filePath)) {
    console.log("File exists!");
    console.log(filePath);
  } else {
    console.log("File does not exist!");
    fs.writeFileSync(filePath, JSON.stringify(allPosts));
  }
}

export { createFile };

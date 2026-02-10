import express from "express";
import { createFile } from "./src/db/file.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send("Hello World");
  createFile();
});

app.listen(port, () => {
  console.log(`Server running at port ${port}/`);
});

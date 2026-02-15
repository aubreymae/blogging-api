/*
 * Starts the app, configures the middleware, and mounts routes.
 */
import express from "express";
import router from "./src/routes/post.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/posts", router);

app.listen(port, () => {
  console.log(`Server running at port ${port}/`);
});

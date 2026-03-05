import pool from "../db/db.js";

async function insertPost(post) {
  try {
    const result = await pool.query(
      "INSERT INTO posts(title, content, category_id, created_at) VALUES($1, $2, $3, $4)",
      [post.title, post.content, post.category, post.created_at],
    );
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { insertPost };

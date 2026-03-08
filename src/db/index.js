import pool from "../db/db.js";

/*
 * Check if category exists; otherwise, create it.
 */
async function checkCategory(name) {
  const existing = await pool.query(
    "SELECT category_id FROM categories WHERE category_name=$1",
    [name],
  );

  if (existing.rows.length > 0) {
    return existing.rows[0].category_id;
  }

  const created = await pool.query(
    "INSERT INTO categories(category_name) VALUES($1) RETURNING category_id",
    [name],
  );

  return created.rows[0].category_id;
}

/*
 * Insert post into the database.
 */
async function insertPost(post, categoryID) {
  const result = await pool.query(
    "INSERT INTO posts(title, content, category_id, created_at) VALUES($1, $2, $3, $4) RETURNING post_id",
    [post.title, post.content, categoryID, post.created_at],
  );

  return result.rows[0].post._id;
}

/*
 * Check if tags exist; otherwise, create them.
 */
async function checkTags(tag) {
  const result = await pool.query(
    "INSERT INTO tags(tag_name) VALUES($1) ON CONFLICT (tag_name) DO UPDATE SET tag_name = EXCLUDED.tag_name RETURNING tag_id",
    [tag],
  );

  return result.rows[0].tag_id;
}

/*
 * Connect and insert into post_tags table.
 */
async function insertPostTag(postID, tagID) {
  await pool.query("INSERT INTO post_tags(post_id, tag_id) VALUES($1, $2)", [
    postID,
    tagID,
  ]);
}

export { checkCategory, insertPost, checkTags, insertPostTag };

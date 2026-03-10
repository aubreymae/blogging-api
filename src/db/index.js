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

  return result.rows[0].post_id;
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

/*
 * Delete rows from post_tags.
 */
async function deletePostTag(postID) {
  await pool.query("DELETE FROM post_tags WHERE post_id=$1", [postID]);
}

/*
 * Delete post by id.
 */
async function deletePostByID(id) {
  const result = await pool.query("DELETE FROM posts WHERE post_id=$1", [id]);

  return result.rowCount;
}

/*
 * Update post by id.
 */
async function updatePost(id, title, content, category, tags) {
  const existingCatID = await checkCategory(category);

  const result = await pool.query(
    "UPDATE posts SET title=$1, content=$2, category_id=$3 WHERE post_id=$4",
    [title, content, existingCatID, id],
  );

  await deletePostTag(id);

  for (const tag of tags) {
    const resultTagID = await checkTags(tag);
    await insertPostTag(id, resultTagID);
  }
}

export {
  checkCategory,
  insertPost,
  checkTags,
  insertPostTag,
  deletePostByID,
  updatePost,
};

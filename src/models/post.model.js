class Post {
  constructor(id, title, content, category, tags) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.content = content;
    this.category = category;
    this.tags = tags;
    this.createdAt = new Date();
  }
}

module.exports = Post;

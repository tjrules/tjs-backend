const db = require('../db/config');

const Post = {};

Post.findAll = id => {
  return db.query(`
    SELECT *, posts.id FROM posts
    JOIN users ON posts.user_id = users.id
    WHERE users.id = $1
    `, id)
};

Post.findById = id => {
  return db.oneOrNone(`SELECT * FROM posts WHERE id = $1`,[id]);
};

Post.create = (posts) => {
  console.log("created post");
  return db.one(
    `
      INSERT INTO posts
      (title, content, user_id)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [posts.title, posts.content, posts.user_id]
  );
};

Post.update = (posts, id) => {
  console.log("update working");
  return db.oneOrNone(
  `
    UPDATE posts SET
    title = $1,
    content = $2,
    user_id = $3
    WHERE id = $4
    RETURNING *
  `,
  [posts.title, posts.content, posts.user_id, id]
);
};

Post.delete = id => {
  console.log('model delete running');
  return db.none(
    `
      DELETE FROM posts
      WHERE id = $1
    `,
    [id]
  );
};



module.exports = Post;

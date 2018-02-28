const db = require('../db/config');
const PostList = {};

PostList.findAll = id => {
  return db.query('SELECT * FROM posts')
};

PostList.findById = id => {
  return db.oneOrNone(`SELECT * FROM posts WHERE id = $1`,[id]);
};

module.exports = PostList;

const db = require('../db/config');

const Photo = {};

Photo.findAll = id => {
  return db.query(`
    SELECT *, photos.id FROM photos
    JOIN users ON photos.user_id = users.id
    WHERE users.id = $1
    `, id)
};

Photo.findById = id => {
  return db.oneOrNone(`SELECT * FROM photos WHERE id = $1`,[id]);
};

Photo.create = (projects) => {
  console.log("created photo");
  return db.one(
    `
      INSERT INTO photos
      (title, description, image_url, code_url, user_id)
      VALUES ($1, $2, $3, $4, $5) RETURNING *
    `,
    [photos.title, photos.description, photos.image_url, photos.user_id]
  );
};

Photo.update = (photos, id) => {
  console.log("update working");
  return db.oneOrNone(
  `
    UPDATE photos SET
    title = $1,
    description = $2,
    image_url = $3,
    user_id = $4
    WHERE id = $5
    RETURNING *
  `,
    [photos.title, photos.description, photos.image_url, photos.user_id]
);
};

Photo.delete = id => {
  console.log('model delete running');
  return db.none(
    `
      DELETE FROM photos
      WHERE id = $1
    `,
    [id]
  );
};



module.exports = Photo;

DROP TABLE IF EXISTS photos;

CREATE TABLE IF NOT EXISTS photos(
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  image_url TEXT,    
  user_id INTEGER REFERENCES users(id)
);

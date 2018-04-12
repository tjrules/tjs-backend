DROP TABLE IF EXISTS projects;

CREATE TABLE IF NOT EXISTS projects(
    id BIGSERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    image_url TEXT,
    code_url TEXT,
    user_id INTEGER REFERENCES users(id)
);
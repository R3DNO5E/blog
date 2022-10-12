CREATE USER blogAdmin WITH LOGIN PASSWORD 'password';
CREATE USER blogApp WITH LOGIN PASSWORD 'password';
CREATE DATABASE blog OWNER blogAdmin;
\connect blog;
CREATE TABLE article
(
    id      UUID      NOT NULL DEFAULT gen_random_uuid(),
    version SERIAL    NOT NULL,
    update  TIMESTAMP NOT NULL DEFAULT now(),
    title   TEXT      NOT NULL DEFAULT '',
    content TEXT      NOT NULL DEFAULT '',
    UNIQUE (id, version),
    PRIMARY KEY (id, version)
);
GRANT SELECT,UPDATE,INSERT ON article TO blogapp;
INSERT INTO article (title, content) VALUES ('Test Title','# Test Content');
INSERT INTO article (id, title, content) VALUES ('e3d7f41d-1910-4de9-b4ab-f01559802fc2', 'Test Title 2', '## Test Content Updated');
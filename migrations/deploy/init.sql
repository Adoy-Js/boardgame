-- Deploy boardgame:init to pg

BEGIN;

-- XXX Add DDLs here.
CREATE DOMAIN posint AS int CHECK(VALUE > 0);

CREATE TABLE boardgame (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    author TEXT NOT NULL,
    editor TEXT NOT NULL,
    min_players posint NOT NULL,
    max_players posint NOT NULL,
    min_age posint NOT NULL,
    CHECK(min_players <= max_players)
);

COMMIT;

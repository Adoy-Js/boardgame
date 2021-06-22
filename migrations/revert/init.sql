-- Revert boardgame:init from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE boardgame;
DROP DOMAIN posint;

COMMIT;

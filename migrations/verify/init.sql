-- Verify boardgame:init on pg

BEGIN;

-- XXX Add verifications here.
SELECT * FROM boardgame WHERE false;

ROLLBACK;

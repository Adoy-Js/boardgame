-- Verify boardgame:api/baordgame_functions on pg

BEGIN;

SELECT add_boardgame('', '', '', 1, 2, 3);
SELECT update_boardgame('test', '', '', 1, 2, 3, 4);

ROLLBACK;

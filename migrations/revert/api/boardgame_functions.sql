-- Revert boardgame:api/baordgame_functions from pg

BEGIN;

DROP FUNCTION update_boardgame(text, text, text, int, int, int, int);
DROP FUNCTION add_boardgame(text, text, text, int, int, int);

COMMIT;

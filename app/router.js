const {Router} = require('express');

const router = Router();

const boardgameController = require('./controller/boardgameController');


router.get('/games', boardgameController.getAllGames);
router.get('/games/:id', boardgameController.getOneGame);

router.post('/games', boardgameController.addGame);

module.exports = router;
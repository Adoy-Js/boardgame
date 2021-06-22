const Boardgame = require('../models/boardgame')

const boardgameController = {

  getAllGames:async(req, res)=>{
    const games = await Boardgame.findAll();
    res.json(games);
  },

  getOneGame:async(req, res)=>{
    const {id} = req.params;
    const game = await Boardgame.findOne(id);
    res.json(game);
  },

  addGame:async(req, res)=>{
    const game = new Boardgame(req.body);
    try {
      await game.save();
      res.status(201).json(game);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

};

module.exports = boardgameController;
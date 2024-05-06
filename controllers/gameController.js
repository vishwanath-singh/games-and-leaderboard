const Game = require('../models/games.models')

exports.getAllGames = async (req, res, next) => {
    try {
        const games = await Game.findAll()
        res.status(200).json({success:true, games})
    }
    catch {
        res.status(500).json({success:false, message: 'Unable to get game'})
    }

}

exports.postGames = async (req, res, next) => {
    const {name} = req.body;

    try {
        const game = await Game.create({name})
        res.status(200).json({success:true, message:'game added successfully'})
    }
    catch {
        res.status(500).json({success:false, message: 'Unable to add game'})
    }

}
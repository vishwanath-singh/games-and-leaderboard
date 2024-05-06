const express = require('express');

const router = express.Router();

const gameController = require('../controllers/gameController')
const matchController = require('../controllers/matchController')
const leaderboardController = require('../controllers/leaderboardController')

router.get('/get-games', gameController.getAllGames)

router.post('/add-game', gameController.postGames)

router.post('/add-match', matchController.postMatch)

router.post('/get-leaderboard', leaderboardController.getLeaderboard)

module.exports = router
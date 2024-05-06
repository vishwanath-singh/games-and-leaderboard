const Leaderboard = require('../models/leaderboard.models');

exports.getLeaderboard = async(req, res, next) => {
    try {
        const leaderboard = await Leaderboard.findAll({ order: [['totalScore', 'DESC']] });
        res.json({ success: true, leaderboard });
      } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
      }
}
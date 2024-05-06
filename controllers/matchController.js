const Match = require('../models/match.models');
const Leaderboard = require('../models/leaderboard.models');

exports.postMatch = async (req, res, next) => {
    try {
        const match = await Match.create(req.body);
    
        if (match.winner) {
          const [leaderboard, created] = await Leaderboard.findOrCreate({
            where: { player: match.winner },
            defaults: { totalScore: 1 }
          });
    
          if (!created) {
            leaderboard.increment('totalScore');
          }
        }
    
        res.status(201).json({ success: true, match });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server error' });
      }
}
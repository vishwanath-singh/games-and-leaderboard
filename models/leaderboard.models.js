const {DataTypes} = require('sequelize')

const sequelize = require('../util/database');

const Leaderboard = sequelize.define('leaderboard', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true
    },
    player: DataTypes.STRING,
    totalScore: DataTypes.INTEGER
})

module.exports = Leaderboard;
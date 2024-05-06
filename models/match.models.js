const {DataTypes} = require('sequelize')

const sequelize = require('../util/database');

const Match = sequelize.define('match', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true
    },
    firstOpponent: DataTypes.STRING,
    secondOpponent: DataTypes.STRING,
    winner: DataTypes.STRING
})

module.exports = Match;
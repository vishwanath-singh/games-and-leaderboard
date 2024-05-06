const {DataTypes} = require('sequelize')

const sequelize = require('../util/database');

const Game = sequelize.define('game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true
    },
    name: DataTypes.STRING
})

module.exports = Game;
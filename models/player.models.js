const {DataTypes} = require('sequelize')

const sequelize = require('../util/database');

const Player = sequelize.define('player', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true
    },
    name: DataTypes.STRING
})

module.exports = Player;
const Sequelize = require('sequelize');
const connection = require('../db/connection')

const User = connection.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    money: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
})

User.sync({force: false})

module.exports = User
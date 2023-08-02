const Sequelize = require('sequelize');

const sequelize  = require('../util/database');

const  Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNULl: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING, 
        allowNULl: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNULl: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNULl: false
    },
    description: {
        type: Sequelize.STRING,
        allowNULl: false
    }
})

module.exports = Product
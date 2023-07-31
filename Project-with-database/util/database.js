const {Sequelize} = require('sequelize');



const sequelize = new Sequelize('node-complete', 'root', 'F38171380', {
    dialect: 'mysql',
    host: 'localhost'
  })

module.exports = sequelize;


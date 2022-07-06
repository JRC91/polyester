const Sequelize = require('sequelize')
const db = require('../db')

const Article = db.define('article', {
  header: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bodyText: {
    type: Sequelize.TEXT
  }

})

module.exports = Article

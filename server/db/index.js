//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Article = require('./models/Article')
const Tagged = require('./models/Tagged')
const Tag = require('./models/Tags')
//associations could go here!

Tag.belongsToMany(Article, {through: Tagged})


module.exports = {
  db,
  models: {
    User,
    Article,
    Tag,
    Tagged
  },
}

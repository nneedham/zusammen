const Sequelize = require('sequelize');
const db = require('../db');

const UserScores = db.define('userScores', {
  innovatorWords: {
    type: Sequelize.INTEGER
  },
  paragonWords: {
    type: Sequelize.INTEGER
  },
  trendSetterWords: {
    type: Sequelize.INTEGER
  },
  citizenWords: {
    type: Sequelize.INTEGER
  },
  athleteWords: {
    type: Sequelize.INTEGER
  },
  tinkererWords: {
    type: Sequelize.INTEGER
  },
  stewardWords: {
    type: Sequelize.INTEGER
  },

})

module.exports = UserScores

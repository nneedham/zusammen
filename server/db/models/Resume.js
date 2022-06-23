const Sequelize = require('sequelize');
const db = require('../db')

const Resume = db.define('resume', {
  text: {
    type: Sequelize.TEXT
  }
})

module.exports = Resume

//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Resume = require('./models/Resume.js')
const UserScores = require('./models/UserScores')

//associations could go here!
User.hasOne(UserScores)
UserScores.belongsTo(User)
User.hasOne(Resume)
Resume.belongsTo(User)

module.exports = {
  db,
  models: {
    User,
    Resume,
    UserScores
  },
}

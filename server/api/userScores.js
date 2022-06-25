const router = require('express').Router()
const { models: {UserScores}} = require('../db')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const userScores = await UserScores.findOne({
      where: {
        userId: id
      },
      attributes: ['userId', 'innovatorWords', 'paragonWords', 'trendSetterWords', 'citizenWords', 'athleteWords', 'stewardWords', 'tinkererWords' ]
    });
    res.json(userScores);
  } catch (err) {
    next(err);
  }
})

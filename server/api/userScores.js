const router = require('express').Router()
const { models: {UserScores}} = require('../db')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const userScores = await UserScores.findOne({
      where: {
        userId: id
      }
    });
    res.json(userScores);
  } catch (err) {
    next(err);
  }
})

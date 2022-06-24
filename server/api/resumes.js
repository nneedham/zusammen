const router = require('express').Router();
const {models: {Resume, UserScores} } = require('../db');
module.exports = router;
const calculateScore = require('./calculations/index')

router.post('/', async (req, res, next) => {
  try {
    const newResume = await Resume.create(req.body);
    const words = req.body.text;
    const score = calculateScore(words);
    await UserScores.create(score);
    res.json(newResume);
  } catch (error) {
    next(error);
  }
})

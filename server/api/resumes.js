const router = require('express').Router();
const {models: {Resume} } = require('../db');
module.exports = router;
const calculateScore = require('./calculations/index')

router.post('/', async (req, res, next) => {
  try {
    const newResume = await Resume.create(req.body);
    const words = req.body.text
    console.log(calculateScore(words));
    res.json(newResume);
  } catch (error) {
    next(error);
  }
})

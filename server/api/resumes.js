const router = require('express').Router();
const {models: {Resume} } = require('../db');
module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    const newResume = await Resume.create(req.body);
    res.json(newResume);
  } catch (error) {
    next(error);
  }
})

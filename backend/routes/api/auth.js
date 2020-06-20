const express = require('express');

const router = express.Router();
router.post('/login', async (req, res) => {
  
  return res.json({login: true});
});

router.post('/register', async (req, res) => {
  console.log(req.body);
  return res.json({register: true});
});

module.exports = router;

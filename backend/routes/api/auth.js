const express = require('express');

const router = express.Router();
router.post('/login', async (req, res) => {
  
    return res.send('login page');
});

router.post('/register', async (req, res) => {
  
  return res.send('register page');
});

module.exports = router;

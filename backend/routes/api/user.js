const express = require('express');
const router = express.Router();


router.get('/data-view', (req, res) => {
  res.send('data view');
});

module.exports = router;

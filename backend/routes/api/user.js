const express = require('express');
const router = express.Router();


router.get('/data-view', (req, res) => {
  res.json({page:'data-view'});
});

module.exports = router;

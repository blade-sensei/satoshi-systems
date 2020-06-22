const express = require('express');
const accountModel = require('../../models/account.model');


const router = express.Router();
router.post('/login', async (req, res) => {
  const user = await accountModel.findOneBy({
    username: req.body.username,
    password: req.body.password
  });
  if (!user) return res.json({loginSucess: false});
  return res.json({loginSucess: true, user});
});

router.post('/register', async (req, res) => {
  req.body.age = Number(req.body.age);
  req.body.score = Number(req.body.score);
  console.log(req.body);
  const userRegisterDB = await accountModel.add(req.body);
  console.log(userRegisterDB);
  return res.json({register: true});
});

module.exports = router;

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  score: Number,
  password: String,
});
const Account = mongoose.model('account', schema);

const add = (account) => {
  return new Account(account).save();
};

module.exports = {
  Account,
  add
};

const express = require('express');
const api = require('./routes/api');
const config = require('./config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();



module.exports = app;

app.use(bodyParser.json());

// enable cross origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS, PATCH');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// adding routes modules
app.use('/api', api);
app.use((req, res) => {
  res.send(404);
});

// config server
const port = process.env.PORT || config.server.port;
app.listen(port, () => {
  console.info(`server api is running on : ${port} port ...`);
});

//Todo config database
// config database

const mongoURI = process.env.DB_URI || config.db.uri;
mongoose
  .connect(mongoURI)
  .then(() => {
    return console.info(`database connection on ${mongoose.connection.port} port with success!`);
  })
  .catch((error) => {
    console.info('fail to connect to database');
  });


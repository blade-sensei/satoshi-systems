const express = require('express');
const api = require('./routes/api');
const config = require('./config');
const app = express();


module.exports = app;


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

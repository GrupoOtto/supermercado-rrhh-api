const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const api = require('./api');

mongoose.connect(process.env.DB_URL);
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(morgan('tiny'));

api(app);

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({
      ... error,
      status: error.status || 500,
      message: error.message || 'Server error',
    });
    throw error;
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

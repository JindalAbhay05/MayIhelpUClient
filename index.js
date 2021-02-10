const express = require('express');
const cors = require('cors');

const port = 8000;

const passport = require('passport');
const passportJwt = require('./config/passportJWTstrategy');

const db = require('./config/mongoose');

const app = express();
app.use(cors());
app.use(passport.initialize());

const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));

app.use('/', require('./routes'));

app.listen(port, (err) => {
  if (err) {
    console.log('Error in connecting to te server!', err);
  } else {
    console.log('Successfully connected to the server!');
  }
});

app.use(passport.initialize());

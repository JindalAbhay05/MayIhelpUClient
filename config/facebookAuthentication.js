var passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const crypto = require('crypto');

const User = require('../models/user');
console.log("profile>>>>>>>>>>")

passport.use(new FacebookStrategy({
    clientID: '872309366949019',
    clientSecret: 'c34fa833895ca162bf84b4d4d1971bbb',
    callbackURL: "http://192.168.43.207:8000/api/users/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log("profile>>>>>>>>>>", profile);
    User.findOrCreate({ email: profile.emails[0].value }, (err, user) => {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
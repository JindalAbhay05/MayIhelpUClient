const passport = require('passport');

const googleStrategy = require('passport-google-oauth').OAuth2Strategy;

const crypto = require('crypto');

const User = require('../models/user');

passport.use(
  new googleStrategy(
    {
      clientID:
        '483217679431-nokvlaejcsbddgbfvaqhbum5sfr330vm.apps.googleusercontent.com',
      clientSecret: 'az-TCdffr9VmKtm-cJRbR01t',
      callbackURL: 'https://mayihelpu.herokuapp.com/api/users/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ email: profile.emails[0].value }).exec((err, user) => {
        if (err) {
          console.log('Error in google authentication', errr);
          return;
        }

        console.log(profile);

        if (user) {
          return done(null, user);
        } else {
          console.log("inside>>>>>>>>>>>>>>")
          User.create(
            {
              name: profile.displayName,
              email: profile.emails[0].value,
              password: crypto.randomBytes(20).toString('hex'),
            },
            (err, user) => {
              if (err) {
                console.log('Error in google authentication', errr);
                return;
              } else {
                return  done(null, user);
              }
            }
          );
        }
      });
    }
  )
);

module.exports = passport;

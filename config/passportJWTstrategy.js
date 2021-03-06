const passport = require('passport');
const User = require('../models/user');

const JWTStrategy = require('passport-jwt').Strategy;

const { ExtractJwt } = require('passport-jwt');

const secretKey = 'secret';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

passport.use(
  new JWTStrategy(options, async (jwtPayload, done) => {
    try {
      console.log("user>>>>>>>>>>>>", jwtPayload);
      const user = await User.findOne({email: jwtPayload.email});
      console.log("user>>>>>>>>>>>>", user);
      if (user) {
        return done(null, { name: user.name, email: user.email, id: user._id });
      } else {
        return done(null, false);
      }
    } catch (err) {
      console.log('Error in finding the user from jwt', err);
      done(null, false);
    }
  })
);

module.exports = passport;

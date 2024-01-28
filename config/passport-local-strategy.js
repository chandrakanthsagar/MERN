const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async function(email, password, done) {
    try {
        const user = await User.findOne({ Email: email });
        if (!user || user.Password !== password) {
            console.log("error password");
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        console.log('Error in finding user');
        return done(err);
    }
}));

// Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// Deserializing the user from the key in the cookies
passport.deserializeUser(async function(id, done) {
    try {
        const user = await User.findById(id);
        if (!user) {
            console.log('User not found');
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        console.log('Error in finding user --> passport');
        return done(err);
    }
});

module.exports = passport;

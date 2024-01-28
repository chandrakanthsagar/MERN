const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('passport-local').Strategy;
const passportLocal = require('./config/passport-local-strategy');
const Contact = require('./models/contact');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
  }))

app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));
app.use(passport.initialize());
app.use(passport.session());

// ... (rest of your middleware and route setup)

app.use('/', require('./routes/routes.js'));

app.listen(5000, () => {
    console.log("server starting at the 5000");
});

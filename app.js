require('dotenv').config()
const express = require('express');
const path = require('path');

const mongoose = require("mongoose");

const User = require("./model/user");

// Authentication
const session = require("express-session");
const passport = require("passport");

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const clueRouter = require('./routes/clueRoutes');
const authRoutes = require("./routes/auth");
const adminRoute = require('./routes/admin');

const catchAsync = require("./utils/catchAsync");
const AppError = require('./utils/appError');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: "keyboardcat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authRoutes);

app.use('/admin', adminRoute);

app.use('/clue', clueRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`404 Page not found`, 404));
});

const DB = "mongodb://localhost:27017/puzzle_game";
const cloudUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.p5qv8.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(cloudUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
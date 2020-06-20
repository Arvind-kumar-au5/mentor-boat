const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routers/api/mentee/users");
const mentorUser = require('./routers/api/mentor/mentor')


const app = express();

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/users", users);
app.use("/api/mentor",mentorUser);
app.use("/api/auth",require('./routers/api/mentor/auth'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

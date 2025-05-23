require('dotenv').config;

const express = require("express");
const path = require("path")
const mongoose = require("mongoose");
const routes = require("./routes");
var db = require("./models");
const app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require("body-parser")

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json({
  strict: false
}));

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
// }

app.use(express.static("client/build"));
app.use(routes);

app.use('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')));

// app.use(cookieParser());rs
// Add routes, both API and view


// app.use((req, res, next) => {
//   const token = req.cookies.token;

//   if (token) {
//     const { id } = jwt.verify(token, process.env.APP_SECRET);

//     req.user = id;
//   }

//   next();
// });
const url = "mongodb+srv://admin:Orangetrainfalcon@cluster0.5b5w3.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

mongoose.connect(url, connectionParams)
  .then(() => {
    console.log('Connected to database ')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  })

const dB = mongoose.connection;
dB.once("open", () => console.log("hello world!"))
// Connect to the Mongo DB
app.get("*", (reg, res) => {
  res.sendFile(path.join(__dirname, "/client/public/index.html"))
})
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

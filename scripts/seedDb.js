const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the books below
const url = "mongodb+srv://admin:Orangetrainfalcon@cluster0.5b5w3.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(
    process.env.MONGODB_URI ||
    url
);

const userSeed = [
    {
        username: "welcome",
        password: "password",
        date: new Date(Date.now())
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

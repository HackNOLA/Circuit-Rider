
const db = require("../models");
const { v4: uuidv4 } = require('uuid');

// Defining methods for the postsController
module.exports = {
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findByUsername: function (req, res) {
        console.log(req.params, "request body")
        const user = JSON.parse(req.params.user)
        console.log(user)
        db.User
            .findOne({
                username: user.username
            })

            //password matching
            .then(dbModel => {
                if (dbModel.password === user.password) {
                    console.log("great!")
                    res.json(dbModel)
                    console.log(dbModel)
                } else {
                    res.json({ err: "password did not match" })
                }
            })

            .catch(err => res.status(422).json(err))
    },

    // signup to create new user to database
    create: function (req, res) {
        console.log(req.body)
        req.body._id = uuidv4()
        db.User.create(req.body)
            .then(data => {
                console.log(data + " records inserted!");
                res.json(data)
                process.exit(0);
            })
            .catch(err => {
                console.error(err);
                process.exit(1);
            });
        // db.User.create(req.body)
        //     .then(dbModel => {
        //         res.json(dbModel)
        //         return;
        //     })
        //     .catch(err => res.status(422).json(err));
    },
};

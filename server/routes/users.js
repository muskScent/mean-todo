const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const db = require('../models');

const router = express.Router();

router.post('/login', (req, res) => {
  db.User.findOne({
      where: {
        user_login: req.body.user_login
      }    
  }).then((user) => {   
    if (bcrypt.compareSync(req.body.user_password, user.dataValues.user_password)) {
        jwt.sign({ user }, 'secretkey', (err, token) => {
            res.json({
                token: token
            });
        });
    } else {
        res.redirect('/login');
    }
  });
});

router.post('/register', (req, res) => {
    // Check that entered login doesn't exist
    db.User.findOne({
        where: {
            user_login: req.body.user_login
        }
    }).then((user) => {
        if (user === null) { // Entered login doesn't exist
            db.User.create({
                user_firstname: req.body.user_firstname,
                user_lastname: req.body.user_lastname,
                user_login: req.body.user_login,
                user_password: bcrypt.hashSync(req.body.user_password, 8)
            })
        } else {
            res.redirect('/register');
        }
    })
})

module.exports = router;
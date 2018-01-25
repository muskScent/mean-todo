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

// router.post('/register', (req, res) => {
//   // if login already exists, redirect to register, error message, else create user
//   Todo.findOne({
//     'userData.login': req.body.login
//   }, (err, todo) => {
//     if (err) {
//       console.log('An error occurred');
//       router.redirect('/register');
//     } else {
//       if (todo) {
//         res.send('User already exists');
//         res.redirect('/register');
//       } else {
//         var newTodo = new Todo();
//         newTodo._id = req.body.login;
//         newTodo.userData.login = req.body.login;
//         newTodo.userData.firstname = req.body.firstname;
//         newTodo.userData.lastname = req.body.lastname;
//         newTodo.userData.password = req.body.password;
//         newTodo.save(function (err) {
//           if (err) {
//             console.log('Error while creating new user: ' + err);
//           }
//         });
//       }
//     }
//   });
// });

module.exports = router;
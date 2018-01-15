const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const Todo = require('../models/Todo.model');

const router = express.Router();

router.post('/login', (req, res) => {
    console.log('Got here');
    console.log('Login: ' + req.body.login);
    // Check if user exists
    Todo.findOne({'userData.login': req.body.login}, (err, todo) => {
        if (err) {
            console.log('Cannot login: ' + err);
            res.redirect('/login');
        } else {
            const enteredPassword = req.body.password;
            const userPassword = todo.userData.password;
            const enteredLogin = req.body.login;
            const userLogin = todo.userData.login;
            
            if (bcrypt.compareSync(enteredPassword, userPassword) && enteredLogin === userLogin) {
                jwt.sign({_id: todo._id, user: todo.userData}, 'secretkey', (err, token) => {
                    res.json({
                        token: token
                    });
                });
            } else {
                res.redirect('/login');
            }
        }
    });
});

router.post('/register', (req, res) => {
    // if login already exists, redirect to register, error message, else create user
    Todo.findOne({'userData.login': req.body.login}, (err, todo) => {
        if (err) {
            console.log('An error occurred');
            router.redirect('/register');
        } else {
            if (todo) {
                res.send('User already exists');
                res.redirect('/register');
            } else {
                var newTodo = new Todo();
                newTodo._id = req.body.login;
                newTodo.userData.login = req.body.login;
                newTodo.userData.firstname = req.body.firstname;
                newTodo.userData.lastname = req.body.lastname;
                newTodo.userData.password = req.body.password;
                newTodo.save(function (err) {
                    if (err){
                        console.log('Error while creating new user: ' + err);
                    }
                  });
            }
        }
    });
});

module.exports = router;
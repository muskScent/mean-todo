const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var Todo = require('../models/Todo.model');
var Task = require('../models/Task.model');

// Get all tasks by user~
router.get('/todos/:userId', (req, res) => {
  Todo.find({
    _id: req.params.userId
  })
    .exec(function(err, todos) {
      if (err) {
        res.send('error has occured: ' + err);
      } else {
        res.json(todos);
      }
    })
});

// Create task for user
router.post('/newTodo', (req, res) => {
  //var newTask = new Task(req.body.description, req.body.dueDate);

  Todo.findById(req.userData._id, function(err, todo) {
    if (err) {
      console.log('err: ' + err);
    } else {
      var tasks = todo.tasks;
      tasks.push({description: req.body.description, dueDate: req.body.dueDate});
      res.send(tasks);
      todo.tasks = tasks;
      todo.save(function(err) {        
      });
    }
  });
});

// Delete a todo for a user
router.delete('/todo/:taskId', (req, res) => {
  Todo.findById(req.userData._id, function(err, todo) {
    if (err) {
      console.log('err: ' + err);
    } else {
      var taskId = req.params.taskId;
      var tasks = todo.tasks;
      res.send(tasks);
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i]._id = taskId) {
          tasks.splice(i, 1);
        }
      }
      todo.tasks = tasks;
      todo.save(function(err) {        
      })
    }
  })
});

// Update a todo
router.get('/todo/:taskId/:description/:dueDate', function(req, res) {
  console.log('got here');
  Todo.findById(req.userData._id, function(err, todo) {
    if (err) {
      console.log('err: ' + err);
    } else {
      var taskId = req.params.taskId;
      var tasks = todo.tasks;
      res.send(tasks);
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i]._id = taskId) {
          tasks[i].description = req.params.description;
          tasks[i].dueDate = req.params.dueDate;
        }
      }
      todo.tasks = tasks;
      todo.save(function(err) {        
      })
    }
  });
});

module.exports = router;
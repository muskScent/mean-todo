const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var Todo = require('../models/Todo.model');
var Task = require('../models/Task.model');

// Get all tasks by user~
router.get('/todos', (req, res) => {
  Todo.find({
    _id: req.userData._id
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
router.post('/newTask', (req, res) => {
  var newTask = new Task();

  newTask.description = req.body.description;
  newTask.dueDate = 'ASAP';

  Todo.findById(req.userData._id, function(err, todo) {
    if (err) {
      console.log('err: ' + err);
    } else {
      var tasks = todo.tasks;
      tasks.push(newTask);
      res.send(tasks);
      todo.tasks = tasks;
      todo.save(function(err) {        
      });
    }
  });
});

// Delete a todo for a user
router.delete('/deleteTask/:taskNumber', (req, res) => {
  Todo.findById(req.userData._id, function(err, todo) {
    if (err) {
      console.log('err: ' + err);
    } else {
      var taskNumber = req.params.taskNumber;
      var tasks = todo.tasks;
      res.send(tasks);
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i]._taskNumber === taskNumber) {
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
router.put('/updateTodo/:_taskNumber/:description/:dueDate', function(req, res) {
  Todo.findById(req.userData._id, function(err, todo) {
    if (err) {
      console.log('err: ' + err);
    } else {
      var _taskNumber = req.params._taskNumber;
      var tasks = todo.tasks;
      var tmp;
      for (var i = 0; i < tasks.length; i++) {
        console.log('entered task number: ' + _taskNumber);
        if (i == _taskNumber - 1) {
          tasks[i].description = req.params.description;
          tasks[i].dueDate = req.params.dueDate;
          tmp = tasks[i];
        }
      }
      res.send(tmp);
      todo.tasks = tasks;
      todo.save(function(err) {        
      })
    }
  });
});

module.exports = router;
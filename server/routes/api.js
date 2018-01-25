const express = require('express');
const jwt = require('jsonwebtoken');

const db = require('../models');

const router = express.Router();

// Get all tasks by user
router.get('/tasks', (req, res) => {
  db.Task.findAll({
    where: {
      user_id: req.userData.user.user_id
    }
  }).then((tasks) => { 
    tasks = tasks.map(task => task.dataValues);
    res.json(tasks);
  }).catch((err) => {
    console.error('Sequelize error: ', err);
  });
});

// Create task for user
router.post('/newTask', (req, res) => {
  db.Task.create({
    user_id: req.userData.user.user_id,
    task_description: req.body.task_description
  })
  .then((task) => {
    res.json(task.dataValues);
  })
  .catch((err) => {
    console.error('Sequelize error: ', err);
  });
});

// Delete a task for a user
router.delete('/deleteTask/:task_id', (req, res) => {
  db.Task.destroy({
    where: {
      task_id: req.params.task_id,
      user_id: req.userData.user.user_id
    }
  })
  .then(() => { res.json('Task deleted') })
  .catch((err) => {
    console.error('Sequelize error: ', err);
  });
});

// Update a task for a user
router.put('/updateTask/:task_id/:task_description', function (req, res) {
  db.Task.update({
    task_description: req.params.task_description
  }, {
    where: {
      user_id: req.userData.user.user_id,
      task_id: req.params.task_id
    }
  }).then(() => { res.json('Update success') })
    .catch((err) => {
    console.error('Sequelize error: ', err);
  });
});

module.exports = router;

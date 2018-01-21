const Sequelize = require('sequelize');

var connection = new Sequelize(process.env.DATABASE_URL);

var Task = connection.define('tasks', {
  task_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }, 
  user_id: {
    type: Sequelize.INTEGER
  },
  task_description: {
    type: Sequelize.STRING
  }
})

module.exports = Task;
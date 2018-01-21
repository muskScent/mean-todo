const Sequelize = require('sequelize');

var connection = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
  define: {
    timestamps: false
  }
});

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
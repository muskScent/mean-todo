module.exports = function(sequelize, DataTypes) {
  return sequelize.define("tasks", {
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
}
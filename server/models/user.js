const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("users", {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_firstname: DataTypes.STRING,
    user_lastname: DataTypes.STRING,
    user_login: DataTypes.STRING,
    user_password: DataTypes.CHAR
  }, {
    hooks: {
      afterValidate: function (users) {
        console.log('hook works');
        users.user_password = bcrypt.hashSync(users.user_password, 8);
      }
    }
  });
}
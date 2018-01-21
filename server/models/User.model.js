const Sequelize = require('sequelize');

var connection = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
  define: {
    timestamps: false
  }
});

var User = connection.define('users', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_firstname: Sequelize.STRING,
  user_lastname: Sequelize.STRING,
  user_login: Sequelize.STRING,
  user_password: Sequelize.CHAR
}, {
  hooks: {
    afterValidate: function (users) {
      console.log('hook works');
      users.user_password = bcrypt.hashSync(users.user_password, 8);
    }
  }
});

module.exports = User;
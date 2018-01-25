if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize')
      , sequelize = null
  
    if (process.env.CLEARDB_DATABASE_URL) {
      // the application is executed on Heroku ... use the postgres database
      sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
        dialect: 'mysql',
        define: {
          timestamps: false
        }
      })
    } else {
      // the application is executed on the local machine ... use mysql
      sequelize = new Sequelize('tasks_db', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        define: {
          timestamps: false
        }
      });
      
    }
  
    global.db = {
      Sequelize: Sequelize,
      sequelize: sequelize,
      User:      sequelize.import(__dirname + '/user'),
      Task:      sequelize.import(__dirname + '/task') 
      // add your other models here
    }
  
    /*
      Associations can be defined here. E.g. like this:
      global.db.User.hasMany(global.db.SomethingElse)
    */
  }
  
  module.exports = global.db
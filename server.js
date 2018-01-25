// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const verifyToken = require('./server/authentication/verifytoken');
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const db = require('./server/models');

// Get our API routes
const api = require('./server/routes/api');
// Get our users authentication routes
const users = require('./server/routes/users');

const app = express();

// Enable CORS
app.use(cors());

// use morgan to log requests to the console
app.use(morgan('dev'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', verifyToken);
app.use('/api', api);
app.use('/users', users);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

db.sequelize.sync().then(function() {
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});
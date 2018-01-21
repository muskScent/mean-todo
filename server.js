// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const verifyToken = require('./server/authentication/verifytoken');
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const Sequelize = require('sequelize');

const connection = new Sequelize('heroku_23ec0927cbe2ae4', 'b4b11a226c955b', 'fc06dd64', {
  host: 'eu-cdbr-west-02.cleardb.net',
  dialect: 'mysql'
});

// Connecting to database 

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

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
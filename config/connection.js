const Sequelize = require('sequelize');
const mysql = require('mysql2');
// Load environment variables using dotenv (if you're using it)
require('dotenv').config();

// Retrieve the database credentials from environment variables
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_DIALECT } = process.env;

// Create a new Sequelize instance
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: mysql,
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

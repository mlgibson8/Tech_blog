const Sequelize = require('sequelize');
require('dotenv').config();
const mysql = require('mysql2');
//require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
});

Sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
module.exports = sequelize;


/* if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
     {
      host: 'localhost',
      dialect: 'mysql',
      password: 'pword',
      port: 3306
    } 
  );
}

module.exports = sequelize;
 */
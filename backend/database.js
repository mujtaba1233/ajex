const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql', // Change this according to your database type
  logging: false, // Disable logging SQL queries (optional)
});

module.exports = sequelize;

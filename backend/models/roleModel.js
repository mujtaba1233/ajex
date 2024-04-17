const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Import your Sequelize connection instance

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  permissions: {
    type: DataTypes.JSON, // Use JSON data type for permissions
    defaultValue: [] // Default value is an empty array
  }
});

module.exports = Role;

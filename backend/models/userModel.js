const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Import your Sequelize connection instance
const Role = require('../models/roleModel');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Roles',
      key: 'id',
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true, // Add timestamps
  createdAt: 'createdAt', // Customize the field name for createdAt
  updatedAt: 'updatedAt', // Customize the field name for updatedAt
});

User.belongsTo(Role, { foreignKey: 'roleId' });
module.exports = User;

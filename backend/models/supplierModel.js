const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Import your Sequelize connection instance
const Invoice = require('../models/invoiceModel');

const Supplier = sequelize.define('Supplier', {
  // Other fields...
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  supplierName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supplierVatNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supplierBankDetails: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supplierNationalAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Disable timestamps for this model
});

// Supplier.hasMany(Invoice, { as: 'Invoice', foreignKey: 'supplierId' });


module.exports = Supplier;

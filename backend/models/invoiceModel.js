const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('../models/userModel');
const Supplier = require('../models/supplierModel');

const Invoice = sequelize.define('Invoice', {
  // Define attributes
  invoiceNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeOfExpense: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expenseType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lineOfBusiness: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departmentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bank: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bankReference: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bankAmount: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  businessUnit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supplierId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Supplier,
      key: 'id',
    },
  },
  attachments: {
    type: DataTypes.JSON,
    defaultValue: [],
    allowNull: false,
  },
}, {
  timestamps: true,
});

Invoice.belongsTo(User, { foreignKey: 'userId' });
Invoice.belongsTo(Supplier, { foreignKey: 'supplierId' });

module.exports = Invoice;

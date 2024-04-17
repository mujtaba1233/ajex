'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoiceNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      priority: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      typeOfExpense: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expenseType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lineOfBusiness: {
        allowNull: false,
        type: Sequelize.STRING
      },
      departmentName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      supplierId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Suppliers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      attachments: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Invoices');
  }
};

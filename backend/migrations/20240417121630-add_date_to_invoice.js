'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Invoices', 'date', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Use current timestamp as default value
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Invoices', 'date');
  }
};
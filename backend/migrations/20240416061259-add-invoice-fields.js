'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Invoices', 'serialNumber', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Invoices', 'bank', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Invoices', 'bankReference', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Invoices', 'bankAmount', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });

    await queryInterface.addColumn('Invoices', 'paymentStatus', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Invoices', 'currency', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Invoices', 'businessUnit', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Invoices', 'serialNumber');
    await queryInterface.removeColumn('Invoices', 'bank');
    await queryInterface.removeColumn('Invoices', 'bankReference');
    await queryInterface.removeColumn('Invoices', 'bankAmount');
    await queryInterface.removeColumn('Invoices', 'paymentStatus');
    await queryInterface.removeColumn('Invoices', 'currency');
    await queryInterface.removeColumn('Invoices', 'businessUnit');
  }
};


'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'To-Do',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Doing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Done',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {})
  }
};

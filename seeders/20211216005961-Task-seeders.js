'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Project101',
        description: 'This project is so important',
        imgUrl: 'https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png?fit=280%2C280&ssl=1',
        CategoryId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project102',
        description: 'This project just for fun',
        imgUrl: 'https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png?fit=280%2C280&ssl=1',
        CategoryId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project103',
        description: 'This project is on progress',
        imgUrl: 'https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png?fit=280%2C280&ssl=1',
        CategoryId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project104',
        description: 'This project was done, but need more some finishing',
        imgUrl: 'https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png?fit=280%2C280&ssl=1',
        CategoryId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project105',
        description: 'Project done',
        imgUrl: 'https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png?fit=280%2C280&ssl=1',
        CategoryId: 3,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project106',
        description: 'Project done',
        imgUrl: 'https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png?fit=280%2C280&ssl=1',
        CategoryId: 3,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project107',
        description: 'Project not done yet',
        imgUrl: 'https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png?fit=280%2C280&ssl=1',
        CategoryId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project108',
        description: 'Project pending',
        imgUrl: 'https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png?fit=280%2C280&ssl=1',
        CategoryId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {})
  }
};

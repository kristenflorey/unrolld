'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        name: 'demo1',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        name: 'demo2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        name: 'demo3',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'kristen@demo-user.com',
        username: 'Kristen Florey',
        name: 'kristen',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'joealves@aa.com',
        username: 'Joe Alves',
        name: 'Joe Alves',
        hashedPassword: bcrypt.hashSync('password'),
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

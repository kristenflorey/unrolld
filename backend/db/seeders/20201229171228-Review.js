'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
      user_id: 1,
      bar_id: 1,
      roll_id: null,
      rating: 4,
      review: 'Wasabi is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      bar_id: 2,
      roll_id: null,
      rating: 4,
      review: 'Kamiya is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      bar_id: 3,
      roll_id: null,
      rating: 4,
      review: 'Bento is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      bar_id: 4,
      roll_id: null,
      rating: 4,
      review: 'Kamikaze is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      bar_id: 5,
      roll_id: null,
      rating: 4,
      review: 'Aikou is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      bar_id: 6,
      roll_id: null,
      rating: 4,
      review: 'Satsuki is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      bar_id: 7,
      roll_id: null,
      rating: 4,
      review: 'Kiku is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      bar_id: 8,
      roll_id: null,
      rating: 4,
      review: 'Wataru is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      bar_id: 9,
      roll_id: null,
      rating: 4,
      review: 'Fiji is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      bar_id: 10,
      roll_id: null,
      rating: 4,
      review: 'Ashia is so great omg',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};

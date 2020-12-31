'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SushiBars', [
        {name:"Wasabi",
        location: "San Diego, CA",
        website:"www.wasabi.com",
        createdAt:new Date(),
        updatedAt:new Date()},
      {name:"Kamiya",
      location: "Orlando, FL",
      website:"www.kamiya56.com", createdAt:new Date(), updatedAt:new Date()},
    {name:"Ashia",
    location: "San Diego, CA",
    website:"www.ashia.com", createdAt:new Date(), updatedAt:new Date()}
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
*/
      return queryInterface.bulkDelete('SushiBars', null, {});

  }
};

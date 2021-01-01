'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SushiBars', [
        {
          name:"Wasabi",
          location: "San Diego, CA",
          website:"www.wasabi.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Kamiya",
          location: "Orlando, FL",
          website:"www.kamiya56.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Bento",
          location: "Chicago, IL",
          website:"www.bentobox.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Kamikaze",
          location: "Miami, FL",
          website:"www.kamikazesushi.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Aikou",
          location: "Brooklyn, NY",
          website:"www.aikousteakhouse.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Ashia",
          location: "San Diego, CA",
          website:"www.ashia.com",
          createdAt:new Date(),
          updatedAt:new Date()
        }
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

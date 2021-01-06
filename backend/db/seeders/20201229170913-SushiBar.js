'use strict';
const {SushiBar} = require('../models')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SushiBars', [
<<<<<<< Updated upstream
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
=======
        {
          name:"Wasabi",
          location: "San Diego, CA",
          website:"https://www.wasabi.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Kamiya",
          location: "Orlando, FL",
          website:"https://www.kamiya56.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Bento",
          location: "Chicago, IL",
          website:"https://www.bentobox.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Kamikaze",
          location: "Miami, FL",
          website:"https://www.kamikazesushi.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Aikou",
          location: "Brooklyn, NY",
          website:"https://www.aikousteakhouse.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Satsuki",
          location: "New York, NY",
          website:"https://www.satsuki.nyc",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Kiku",
          location: "Baltimore, MD",
          website:"https://www.satsuki.nyc",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Wataru",
          location: "Seattle, WA",
          website:"https://wataruseattle.com",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Fiji",
          location: "Boston, MA",
          website:"https://www.fujiatinkblock.com",
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
>>>>>>> Stashed changes
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

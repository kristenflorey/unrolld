'use strict';
const { SushiBar } = require('../models');

module.exports = {
  up: async(queryInterface, Sequelize) => {
    const bars = await SushiBar.findAll();
    return queryInterface.bulkInsert('SushiRolls', [
      {
        name:"Dragon Roll",
        bar_id:bars[0].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Tempura Roll",
        bar_id:bars[1].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Philadelphia Roll",
        bar_id:bars[2].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Spicy Tuna Roll",
        bar_id:bars[3].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Rainbow Roll",
        bar_id:bars[4].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Kamikaze Roll",
        bar_id:bars[5].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Salmon Roll",
        bar_id:bars[6].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"California Roll",
        bar_id:bars[7].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Dynamite Roll",
        bar_id:bars[8].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Spider Roll",
        bar_id:bars[9].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },

    ], {});
},

down: (queryInterface, Sequelize) => {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
*/
    return queryInterface.bulkDelete('SushiRolls', null, {});

}
};

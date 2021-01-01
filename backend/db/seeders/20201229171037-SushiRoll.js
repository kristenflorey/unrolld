'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SushiRolls', [
      {
        name:"Dragon Roll",
        bar_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Tempura Roll",
        bar_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Philadelphia Roll",
        bar_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Spicy Tuna Roll",
        bar_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Rainbow Roll",
        bar_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Kamikaze Roll",
        bar_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Salmon Roll",
        bar_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"California Roll",
        bar_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Dynamite Roll",
        bar_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Spider Roll",
        bar_id:1,
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
    return queryInterface.bulkDelete('SushiRolls', null, {});

}
};

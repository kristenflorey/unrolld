'use strict';
const { SushiBar } = require('../models');

module.exports = {
  up: async(queryInterface, Sequelize) => {
    const bars = await SushiBar.findAll();
    return queryInterface.bulkInsert('SushiRolls', [
      {
        name:"Dragon Roll",
        description:"Shrimp tempura, avocado, cucumber, black sesame seeds & flying fish",
        bar_id:bars[0].id,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Tempura Roll",
        bar_id:bars[1].id,
        description:"Shrimp tempura, cream cheese, avocado, sesame seeds & cucumber",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Philadelphia Roll",
        bar_id:bars[2].id,
        description:"Smoked salmon, cream cheese, cucumber, siracha chili & sushi rice",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Spicy Tuna Roll",
        bar_id:bars[3].id,
        description:"Ahi tuna, spicy mayo, avocado, nori seaweed & sushi rice",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Rainbow Roll",
        bar_id:bars[4].id,
        description:"Cucmber, avocado, and crab covered with yellowtail, salmon, white fish & eel",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Kamikaze Roll",
        bar_id:bars[5].id,
        description:"Salmon, cucumber, avocado, spicy mayo, seaweed & tempura crunch",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Caterpillar Roll",
        bar_id:bars[8].id,
        description:"Eel, cucumber, egg, miso sauce and avocado",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Salmon Roll",
        bar_id:bars[6].id,
        description:"Salmon, avocado, spicy mayo, cucumber, rice vinegar & jalapenos",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"California Roll",
        bar_id:bars[7].id,
        description:"Crab mix, motoyaki sauce, cucumber & avocado",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Dynamite Roll",
        bar_id:bars[8].id,
        description:"Crab, salmon, teriyaki sauce, cucumber & flying fish roe",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Spider Roll",
        bar_id:bars[9].id,
        description:"Soft shell crab, avocado, sesame seeds, cucumber & miso",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Boston Roll",
        bar_id:bars[1].id,
        description:"Shrimp, soy sauce, creamy avocado, cucumber & sushi rice",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Atlantic Roll",
        bar_id:bars[6].id,
        description:"Baked salmon, spicy aioli, cucumber, tempura flakes & eel sauce",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Fiery Shrimp",
        bar_id:bars[1].id,
        description:"Shrimp tempura, spicy motoyaki sauce, avocado & cucumber",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Alaska Roll",
        bar_id:bars[6].id,
        description:"Salmon, spicy crab, tempura shrimp, cucumber, sesame, spicy mayo",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Las Vegas Roll",
        bar_id:bars[2].id,
        description:"Salmon, crab mix, cream cheese, tempura fried & eel sauce",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Tiger Roll",
        bar_id:bars[4].id,
        description:"Avocado, shrimp tempura, sushi rice, seaweed & cucumber",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Soho Roll",
        bar_id:bars[3].id,
        description:"Crab, avocado, shrimp, spicy mayo & smoked salmon",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Firecracker Roll",
        bar_id:bars[5].id,
        description:"Spicy scalled inside with tuna and avocado outside",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Mango Roll",
        bar_id:bars[1].id,
        description:"Avocado, crab meat, tempura shrimp, mango slices, and creamy mango paste",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Eel Avocado Roll",
        bar_id:bars[6].id,
        description:"Nori, rice, avocado, and eel.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Seattle Roll",
        bar_id:bars[1].id,
        description:"Cucumber, avocado, raw salmon, and smoked salmon.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Summer Roll",
        bar_id:bars[6].id,
        description:"Rice wrapper with sashimi and veggies inside.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Snowcorn Roll",
        bar_id:bars[8].id,
        description:"Baked white fish on top. Crab and avocado inside.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Snake Roll",
        bar_id:bars[8].id,
        description:"Freshwater eel and avocado on top of a California roll, finished with sweet sauce",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Asparagus Roll",
        bar_id:bars[8].id,
        description:"Cream cheese, bacon, fresh asparagus & parmesan cheese",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Bath Street Roll",
        bar_id:bars[8].id,
        description:"Octopus, crab, smelt egg, cream cheese, avocado and cucumber",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Blue Crab Roll",
        bar_id:bars[8].id,
        description:"Lump blue crab meat with avocado or and cucumber",
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

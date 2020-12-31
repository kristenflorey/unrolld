'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SushiRolls', [
      {name:"Dragon Roll",
      bar_id:1,
      createdAt:new Date(),
      updatedAt:new Date()}
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

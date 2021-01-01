'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BarRoll', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sushi_bar_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:"SushiBars"}
      },
      sushi_roll_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:"SushiRolls"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BarRoll');
  }
};

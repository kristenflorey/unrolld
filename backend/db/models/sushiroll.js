'use strict';
module.exports = (sequelize, DataTypes) => {
  const SushiRoll = sequelize.define('SushiRoll', {
    name: DataTypes.STRING,
    bar_id: DataTypes.INTEGER
  }, {});
  SushiRoll.associate = function(models) {
    // associations can be defined here
  };
  return SushiRoll;
};
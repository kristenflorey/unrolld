'use strict';
module.exports = (sequelize, DataTypes) => {
  const SushiBar = sequelize.define('SushiBar', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  SushiBar.associate = function(models) {
    // associations can be defined here
  };
  return SushiBar;
};
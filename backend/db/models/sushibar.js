'use strict';
module.exports = (sequelize, DataTypes) => {
  const SushiBar = sequelize.define('SushiBar', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  SushiBar.associate = function(models) {
    SushiBar.hasMany(models.SushiRoll, {foreignKey: "bar_id"})
    SushiBar.belongsToMany(models.SushiRoll, {foreignKey: "sushi_bar_id", through:models.BarRolls, otherKey:"sushi_bar_id"})
    SushiBar.hasMany(models.Review, {foreignKey: "bar_id"})
  };
  return SushiBar;
};

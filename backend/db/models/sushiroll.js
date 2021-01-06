'use strict';
module.exports = (sequelize, DataTypes) => {
  const SushiRoll = sequelize.define('SushiRoll', {
    name: DataTypes.STRING,
    bar_id: DataTypes.INTEGER
  }, {});
  SushiRoll.associate = function(models) {
    SushiRoll.belongsTo(models.SushiBar, {foreignKey: "bar_id"})
    // SushiRoll.belongsToMany(models.SushiBar, {foreignKey: "sushi_roll_id", through:models.BarRolls, otherKey:"sushi_bar_id"})
  };
  return SushiRoll;
};

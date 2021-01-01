'use strict';
module.exports = (sequelize, DataTypes) => {
  const BarRoll = sequelize.define('BarRoll', {
    sushi_bar_id: DataTypes.INTEGER,
    sushi_roll_id: DataTypes.INTEGER
  }, {});
  BarRoll.associate = function(models) {
    BarRoll.belongsTo(models.SushiBar, {foreignKey:"sushi_bar_id"})
    BarRoll.belongsTo(models.SushiRoll, {foreignKey:"sushi_roll_id"})
  };
  return BarRolls;
};

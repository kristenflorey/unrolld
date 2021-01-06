'use strict';
module.exports = (sequelize, DataTypes) => {
  const BarRolls = sequelize.define('BarRolls', {
    sushi_bar_id: DataTypes.INTEGER,
    sushi_roll_id: DataTypes.INTEGER
  }, {});
  BarRolls.associate = function(models) {
    BarRolls.belongsTo(models.SushiBar, {foreignKey:"sushi_bar_id"})
<<<<<<< Updated upstream
    BarRolls.belongsTo(models.SushiRoll, {foreignKey:"sushi_roll_id"})
=======
    BarRolls.belongsTo(models.SushiRoll, {foreignKey:"sushi_bar_id"})
>>>>>>> Stashed changes
  };
  return BarRolls;
};

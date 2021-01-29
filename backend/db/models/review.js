'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: DataTypes.INTEGER,
    bar_id: DataTypes.INTEGER,
    bar_id: DataTypes.INTEGER,
    roll_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.SushiBar, {foreignKey:"sushi_bar_id"})
    Review.belongsTo(models.SushiRoll, {foreignKey:"sushi_roll_id"})
    Review.belongsTo(models.User, {foreignKey:"user_id"})
  };
  return Review;
};

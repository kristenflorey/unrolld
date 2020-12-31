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
    // associations can be defined here
  };
  return Review;
};
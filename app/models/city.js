'use strict';
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {
    name: DataTypes.STRING,
    province: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    surfaces: DataTypes.INTEGER
  }, {});
  city.associate = function(models) {
    // associations can be defined here
  };
  return city;
};
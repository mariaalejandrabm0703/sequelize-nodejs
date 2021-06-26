'use strict';
module.exports = (sequelize, DataTypes) => {
  const pharmacy = sequelize.define('pharmacy', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  pharmacy.associate = function(models) {
    pharmacy.belongsTo(models.city, { as: "ubicated", foreignKey: "city_id" })
  };
  return pharmacy;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const pharmacy = sequelize.define('pharmacy', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo no puede ser nulo",
        },
        isAlpha: {
          args: true,
          msg: "El nombre solo puede contener letras",
        },
        len: {
          args: [3, 255],
          msg: "El nombre tiene que ser entre 3 y 255 caracteres",
        },
      },
    },
    address: DataTypes.STRING
  }, {});
  pharmacy.associate = function(models) {
    pharmacy.belongsTo(models.city, { as: "ubicated", foreignKey: "city_id" })
  };
  return pharmacy;
};
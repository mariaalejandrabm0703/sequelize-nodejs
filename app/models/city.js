"use strict";
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define(
    "city",
    {
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
      province: DataTypes.STRING,
      capacity: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            args: true,
            msg: "La capacidad tiene que ser un número",
          },
          min: {
            args: 1,
            msg: "La capacidad tiene que ser mayor o igual que uno",
          },
        },
      },
      surfaces: DataTypes.INTEGER,
    },
    {}
  );
  city.associate = function (models) {
    // associations can be defined here
  };
  return city;
};

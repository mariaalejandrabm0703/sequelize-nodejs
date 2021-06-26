"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let cities = [
      {
        name: "ciudad1",
        province: "provincia1",
        capacity: 10,
        surfaces: 10,
      },
      {
        name: "ciudad2",
        province: "provincia2",
        capacity: 10,
        surfaces: 10,
      },
      {
        name: "ciudad2",
        province: "provincia2",
        capacity: 10,
        surfaces: 10,
      },
    ];
    return queryInterface.bulkInsert("cities", cities, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cities", null, {});
  },
};

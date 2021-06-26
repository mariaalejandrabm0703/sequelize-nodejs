"use strict";
const { city } = require("../../models/index");
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let pharmacies = [];

    let cities = await city.findAll();

    cities.forEach((city) => {
      pharmacies.push({
        name: "farmacia" + city.id,
        address: faker.address.streetName(),
        city_id: city.id,
      });
    });

    return queryInterface.bulkInsert("pharmacies", pharmacies, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pharmacies", null, {});
  },
};

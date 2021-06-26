const { city } = require("../models/index");

module.exports = {
  async all(req, res) {
    let cities = await city.findAll({});

    res.json(cities);
  },
};

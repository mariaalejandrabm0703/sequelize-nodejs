const { City } = require("../models/index");

module.exports = {
  async all(req, res) {
    let cities = await City.findAll({});

    res.json(cities);
  },
};

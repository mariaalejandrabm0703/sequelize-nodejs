const { pharmacy } = require("../models/index");

module.exports = {
  async all(req, res) {
    let pharmacies = await pharmacy.findAll();

    res.json(pharmacies);
  },
};

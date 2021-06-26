const { Pharmacy } = require("../models/index");

module.exports = {
  async all(req, res) {
    let pharmacies = await Pharmacy.findAll({
      attributes: ["street"],
    });

    res.json(pharmacies);
  },
};

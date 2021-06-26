const { pharmacy } = require("../models/index");

module.exports = {
  async all(req, res) {
    let pharmacies = await pharmacy.findAll();
    res.json(pharmacies);
  },
  async create(req, res) {
    pharmacy
      .create({
        name: req.body.name,
        address: req.body.address,
      })
      .then((result) => {
        res.json({
          pharmacy: result,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  async get(req, res) {
    pharmacy.findByPk(req.params.id).then((result) => {
      res.json(result);
    });
  },
  async update(req, res) {
    pharmacy
      .update(
        {
          name: req.body.name,
          address: req.body.address,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((result) => {
        res.json(result);
      });
  },
  async delete(req, res) {
    pharmacy
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.json(result);
      });
  },
};

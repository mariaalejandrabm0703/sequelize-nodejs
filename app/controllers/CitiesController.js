const { city } = require("../models/index");

module.exports = {
  async all(req, res) {
    let cities = await city.findAll({});
    res.json(cities);
  },

  async create(req, res) {
    city
      .create({
        name: req.body.name,
        province: req.body.province,
        capacity: req.body.capacity,
        surfaces: req.body.surfaces,
      })
      .then((city) => {
        res.json({
          city: city,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  async get(req, res) {
    city.findByPk(req.params.id).then((city) => {
      res.json(city);
    });
  },
  async update(req, res) {
    city
      .update(
        {
          name: req.body.name,
          province: req.body.province,
          capacity: req.body.capacity,
          surfaces: req.body.surfaces,
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
    city
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

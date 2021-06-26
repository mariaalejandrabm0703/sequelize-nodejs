const express = require('express');
const router = express.Router();

// Importar controladores
const CitiesController = require('./controllers/CitiesController');
const PharmaciesController = require('./controllers/PharmaciesController');

// Home
router.get('/', (req, res) => res.json({ msg: "Bienvenido..." }));

router.get('/cities', CitiesController.all);
router.get('/pharmacies', PharmaciesController.all);

module.exports = router;
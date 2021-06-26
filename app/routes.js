const express = require('express');
const router = express.Router();

// Importar controladores
const CitiesController = require('./controllers/CitiesController');
const PharmaciesController = require('./controllers/PharmaciesController');

// Home
router.get('/', (req, res) => res.json({ msg: "Bienvenido..." }));

//Cities
router.get('/cities', CitiesController.all);
router.get('/cities/:id', CitiesController.get);
router.post('/cities', CitiesController.create)
router.put('/cities/:id', CitiesController.update)
router.delete('/cities/:id', CitiesController.delete)

//Pharmacies
router.get('/pharmacies', PharmaciesController.all);
router.get('/pharmacies/:id', PharmaciesController.get);
router.post('/pharmacies', PharmaciesController.create)
router.put('/pharmacies/:id', PharmaciesController.update)
router.delete('/pharmacies/:id', PharmaciesController.delete)

module.exports = router;
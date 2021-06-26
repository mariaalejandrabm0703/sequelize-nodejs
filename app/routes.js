const express = require('express');
const router = express.Router();

// Importar controladores
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

// Home
router.get('/', (req, res) => res.json({ msg: "Bienvenido..." }));

// Users
router.get('/cities', UserController.all);
router.get('/pharmacies', AddressController.all);

module.exports = router;
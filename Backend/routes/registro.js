'use strict'

var express = require('express');
var RegistroController = require('../controllers/registro');

var router = express.Router();



// Rutas de prueba

router.get('/search/:search', RegistroController.search);
router.get('/registros/true', RegistroController.registros);
router.delete('/registro/:id', RegistroController.delete);
router.put('/registro/:id', RegistroController.update);

module.exports = router;
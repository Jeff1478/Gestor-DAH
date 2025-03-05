'use strict'

var express = require('express');
var SitioController = require('../controllers/sitio');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/sitios'});

// Rutas de prueba
router.post('/datos-sitio',SitioController.datosSitio);
router.get('/test-de-controlador',SitioController.test);
router.get('/sitio/:id', SitioController.getSitio);
router.get('/sitios/:last?', SitioController.getSitios);
router.get('/search/:search', SitioController.search);
router.get('/searchCanton/:search', SitioController.searchCanton);
router.get('/searchDistrito/:search', SitioController.searchDistrito);

module.exports = router;
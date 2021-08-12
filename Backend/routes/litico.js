'use strict'

var express = require('express');
var LiticoController = require('../controllers/litico');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/liticos'});

// Rutas de prueba
router.post('/datos-litico',LiticoController.datosLitico);
router.get('/test-de-controlador',LiticoController.test);



module.exports = router;
'use strict'

var express = require('express');
var MetalicoController = require('../controllers/metalico');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/metalicos'});

// Rutas de prueba
router.post('/datos-metalico',MetalicoController.datosMetalico);
router.get('/test-de-controlador',MetalicoController.test);


router.post('/save', MetalicoController.save);
router.get('/metalicos/:last?', MetalicoController.getMetalicos);
router.get('/metalico/:id', MetalicoController.getMetalico);
router.put('/metalico/:id', MetalicoController.update);
router.delete('/metalico/:id', MetalicoController.delete);
router.post('/upload-image/:id?', md_upload, MetalicoController.upload);
router.get('/get-image/:image', MetalicoController.getImage);
router.get('/search/:search', MetalicoController.search); 

module.exports = router;
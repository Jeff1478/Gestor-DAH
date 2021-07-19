'use strict'

var express = require('express');
var CeramicController = require('../controllers/ceramic');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/ceramics'});

// Rutas de prueba
router.post('/datos-ceramica',CeramicController.datosCeramica);
router.get('/test-de-controlador',CeramicController.test);

// Rutas útiles

router.post('/save', CeramicController.save);
router.get('/ceramics/:last?', CeramicController.getCeramics);
router.get('/ceramic/:id', CeramicController.getCeramic);
router.put('/ceramic/:id', CeramicController.update);
router.delete('/ceramic/:id', CeramicController.delete);
router.post('/upload-image/:id?', md_upload, CeramicController.upload);
router.get('/get-image/:image', CeramicController.getImage);
router.get('/search/:search', CeramicController.search);

module.exports = router;

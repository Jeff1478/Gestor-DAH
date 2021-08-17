'use strict'

var express = require('express');
var LiticoController = require('../controllers/litico');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/liticos'});

// Rutas de prueba
router.post('/datos-litico',LiticoController.datosLitico);
router.get('/test-de-controlador',LiticoController.test);

// Rutas útiles
router.post('/save', LiticoController.save);
router.get('/liticos/:last?', LiticoController.getLiticos);
router.get('/litico/:id', LiticoController.getLitico);
router.put('/litico/:id', LiticoController.update);
router.delete('/litico/:id', LiticoController.delete);
router.post('/upload-image/:id?', md_upload, LiticoController.upload);
router.get('/get-image/:image', LiticoController.getImage);
router.get('/search/:search', LiticoController.search);



module.exports = router;
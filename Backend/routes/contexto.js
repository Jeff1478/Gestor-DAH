'use strict'

var express = require('express');
var ContextoController = require('../controllers/contexto');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/contexto'});

// Rutas de prueba
router.post('/datos-contexto',ContextoController.datosContexto);
router.get('/test-de-controlador',ContextoController.test);

// Rutas útiles
router.post('/save', ContextoController.save);
router.get('/contextos/:last?', ContextoController.getContextos);
router.get('/contexto/:id', ContextoController.getcontexto);
router.put('/contexto/:id', ContextoController.update);
router.delete('/contexto/:id', ContextoController.delete);
router.post('/upload-image/:id?', md_upload, ContextoController.upload);
router.get('/get-image/:image', ContextoController.getImage);
router.get('/search/:search', ContextoController.search);

module.exports = router;
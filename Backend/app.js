'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();
// Cargar ficheros rutas
var ceramic_routes = require('./routes/ceramic');
var contexto_routes = require('./routes/contexto');
var litico_routes = require ('./routes/litico');
var metalico_routes = require ('./routes/metalico');

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// CORS

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Adañir prefijos a rutas 
app.use('/api', ceramic_routes);
app.use('/ap', contexto_routes);
app.use('/aplit', litico_routes);
app.use('/apmet', metalico_routes);


// Exportar Modulo (fichero actual)
module.exports = app;
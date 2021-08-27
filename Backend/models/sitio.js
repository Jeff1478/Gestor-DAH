'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SitioSchema = Schema({
    
    date: { type: Date, default: Date.now },
    image: String,
    num_caso: String,
    nombre_sitio: String,
    clave_sitio: String,
    hallazgo: String,
    fecha_registro: Date,
    registrador: String

});

module.exports = mongoose.model('Sitio', SitioSchema);
// Litico guarda documentos con esta estructura en la coleccion

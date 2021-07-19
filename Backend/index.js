'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/colecciones_dah', { useNewUrlParser: true })
.then(() => {
    console.log('Conexion Exitosa');

    //crear servidor y escuchar peticiones http
    app.listen(port, () => {
        console.log('Servidor Corriendo en http://localhost'+port);
    })
});
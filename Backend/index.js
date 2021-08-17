'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/colecciones_dah', { useNewUrlParser: true })
//mongoose.connect('mongodb+srv://museo123:museo123@cluster0.8xg6h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(() => {
    console.log('Conexion Exitosa');

    //crear servidor y escuchar peticiones http
    app.listen(port, () => {
        console.log('Servidor Corriendo en http://localhost'+port);
    })
}); 



/* const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://museo123:museo123@cluster0.8xg6h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

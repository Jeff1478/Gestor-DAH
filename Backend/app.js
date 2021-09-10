'use strict'

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const app = new express();
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;

// Cargar modulos de node para crear servidor
//var express = require('express');
//var bodyParser = require('body-parser');

// Funciones Passport



// Ejecutar express (http)
//var app = express();
// Cargar ficheros rutas
var ceramic_routes = require('./routes/ceramic');
var contexto_routes = require('./routes/contexto');
var litico_routes = require ('./routes/litico');
var metalico_routes = require ('./routes/metalico');
var sitio_routes = require ('./routes/sitio');
var user_routes = require ('./routes/user');

// Middlewares
app.use(session({ secret: 'anything', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// CORS
const auth = () => {
    return (req, res, next) => {
        passport.authenticate('local', (error, user, info) => {
            if(error) res.status(400).json({"statusCode" : 200 ,"message" : error});
            req.login(user, function(error) {
                if (error) return next(error);
                next();
            });
        })(req, res, next);
    }
}

app.post('/authenticate', auth() , (req, res) => {
    res.status(200).json({"statusCode" : 200 ,"user" : req.user});
});

const isLoggedIn = (req, res, next) => {
    console.log('session ', req.session);
    if(req.isAuthenticated()){
        //console.log('user ', req.session.passport.user)
        return next()
    }
    return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}

app.get('/getData', isLoggedIn, (req, res) => {
    res.json("data is")
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'Access-Control-Allow-Private-Network');
    next();
});


// Adañir prefijos a rutas 
app.use('/api', ceramic_routes);
app.use('/ap', contexto_routes);
app.use('/aplit', litico_routes);
app.use('/apmet', metalico_routes);
app.use('/apis', sitio_routes);
app.use('/apu', user_routes);


// Exportar Modulo (fichero actual)
module.exports = app;
'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Litico = require('../models/litico');

var controller = {

    datosLitico: (req, res) => {
        var hola = req.body.hola;

        return res.status(200).send({
        curso: 'Master en Frame',
        autor: 'Jeffrey',
        url: 'jeffreytapia.com',
        hola
        });  
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion de mi controlador de litico'
        });
    },

   
}; // end controler

module.exports = controller;

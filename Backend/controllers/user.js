'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Usuario = require('../models/user');

var controller = {

    datosUsuario: (req, res) => {
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
            message: 'Soy la accion de mi controlador de Usuario'
        });
    },

    getUsuarios: (req, res) => {
 
        var query = Usuario.find({});

        var last = req.params.last;
       

        if(last || last != undefined){
            query.limit(5);
        }

        // Find
        query.sort('-_id').exec((err, usuario) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los usuarios !!!'
                });
            }

            if(!usuario){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay usuarios para mostrar !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                usuario
            });

        });
    },

    getUsuario: (req, res) => {

        // Recoger el id de la url
        var userId = req.params.id;

        // Comprobar que existe
        if(!userId || userId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el usuario !!!'
            });
        }

        // Buscar el articulo
        Usuario.findById(userId, (err, usuario) => {
            
            if(err || !usuario){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el usuario !!!'
                });
            }

            // Devolverlo en json
            return res.status(200).send({
                status: 'success',
                usuario
            });

        });
    },

    search: (req, res) => {
        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        Usuario.find({ "$or": [
            { "email": { "$regex": searchString, "$options": "i"}},
            { "password": { "$regex": searchString, "$options": "i"}}
        ]})
        //.sort([['date', 'descending']])
        .exec((err, usuarios) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }
            
            if(!usuarios || usuarios.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay usuarios que coincidan con tu busqueda !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                usuarios
            });

        });
    }

}; // end controler

module.exports = controller;
'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Sitio = require('../models/sitio');

var controller = {

    datosSitio: (req, res) => {
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
            message: 'Soy la accion de mi controlador de Sitio'
        });
    },

    getSitios: (req, res) => {
 
        var query = Sitio.find({});

        var last = req.params.last;
       

        if(last || last != undefined){
            query.limit(10);
        }

        // Find
        query.sort('-_id').exec((err, sitio) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos !!!'
                });
            }

            if(!sitio){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                sitio
            });

        });
    },

    getSitio: (req, res) => {

        // Recoger el id de la url
        var sitioId = req.params.id;

        // Comprobar que existe
        if(!sitioId || sitioId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el sitio !!!'
            });
        }

        // Buscar el articulo
        Sitio.findById(sitioId, (err, sitio) => {
            
            if(err || !sitio){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el sitio !!!'
                });
            }

            // Devolverlo en json
            return res.status(200).send({
                status: 'success',
                sitio
            });

        });
    },

    search: (req, res) => {
    
            var searchString = req.params.search;
    
            Sitio.find({ "$or": [
                
                { "provincia": { "$regex": searchString, "$options": "i"}},
                { "canton": { "$regex": searchString, "$options": "i"}}
                
            ]})
            .sort([['date', 'descending']])
    
            .exec((err, sitio) => {
    
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error en la petición !!!'
                    });
                }
                
                if(!sitio || sitio.length <= 0){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay artefactos que coincidan con tu busqueda !!!'
                    });
                }
    
                return res.status(200).send({
                    status: 'success',
                    sitio
                });
    
            });
        },


        searchCanton: (req, res) => {
    
            var searchString = req.params.search;
    
            Sitio.find({ "$or":[
                
                
                { "canton": { "$regex": searchString, "$options": "i"}},
                { "provincia": { "$regex": searchString, "$options": "i"}},
                
            ]})
            .sort([['date', 'descending']])
    
            .exec((err, sitio) => {
    
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error en la petición !!!'
                    });
                }
                
                if(!sitio || sitio.length <= 0){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay artefactos que coincidan con tu busqueda !!!'
                    });
                }
    
                return res.status(200).send({
                    status: 'success',
                    sitio
                });
    
            });
        },
    
        searchDistrito: (req, res) => {
    
            var searchString = req.params.search;
    
            Sitio.find({ "$or":[
                
                
                { "canton": { "$regex": searchString, "$options": "i"}},
                { "distrito": { "$regex": searchString, "$options": "i"}},
                
            ]})
            .sort([['date', 'descending']])
    
            .exec((err, sitio) => {
    
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error en la petición !!!'
                    });
                }
                
                if(!sitio || sitio.length <= 0){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay artefactos que coincidan con tu busqueda !!!'
                    });
                }
    
                return res.status(200).send({
                    status: 'success',
                    sitio
                });
    
            });
        }
    

}; // end controler

module.exports = controller;
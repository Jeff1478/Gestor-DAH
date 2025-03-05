'use strict'
const nodemailer = require('nodemailer');
var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Registro = require('../models/registro');

var controller = {

    datosRegistro: (req, res) => {
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
            message: 'Soy la accion de mi controlador de Registro'
        });
    },

   

    search: (req, res) => {
        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        Registro.find({ "$or": [
            { "nombre": { "$regex": searchString, "$options": "i"}},
            { "email": { "$regex": searchString, "$options": "i"}}
        ]})
        //.sort([['date', 'descending']])
        .exec((err, registro) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }
            
            if(!registro || registro.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay usuarios que coincidan con tu busqueda !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                registro
            });

        });
    },

     registros: (req, res) => {
    
            var query = Registro.find({});
    
            var last = req.params.last;
           
    
            if(last || last != undefined){
                query.limit(5);
            }
    
            // Find
            query.sort('-_id').exec((err, registro) => {
    
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al devolver los articulos !!!'
                    });
                }
    
                if(!registro){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay articulos para mostrar !!!'
                    });
                }
    
                return res.status(200).send({
                    status: 'success',
                    registro
                });
    
            });
        },

delete: (req, res) => {
        // Recoger el id de la url
        var registroId = req.params.id;

        // Find and delete
        Registro.findOneAndDelete({_id: registroId}, (err, registroRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }

            if(!registroRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                registro: registroRemoved
            });

        }); 
    },

    update: (req, res) => {
            // Recoger el id del articulo por la url
            var registroId = req.params.id;
    
            // Recoger los datos que llegan por put
            var params = req.body;
    
            // Validar datos
           /*  try{
                var validate_title = !validator.isEmpty(params.title);
                var validate_content = !validator.isEmpty(params.content);
            }catch(err){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar !!!'
                }); 
            } */
    
            //  if(validate_title && validate_content){
                 // Find and update
                 Registro.findOneAndUpdate({_id: registroId}, params, {new:true}, (err, registroUpdated) => {
                    if(err){
                        return res.status(500).send({
                            status: 'error',
                            message: 'Error al actualizar !!!'
                        });
                    }
    
                    if(!registroUpdated){
                        return res.status(404).send({
                            status: 'error',
                            message: 'No existe el articulo !!!'
                        });
                    }
    
                    return res.status(200).send({
                        status: 'success',
                        registro: registroUpdated
                    });
                 });
            /* }else{
                 // Devolver respuesta
                return res.status(200).send({
                    status: 'error',
                    message: 'La validación no es correcta !!!'
                });  }*/
           
           
        }

    

}; // end controler

module.exports = controller;
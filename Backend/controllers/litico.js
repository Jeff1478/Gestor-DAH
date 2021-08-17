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

    save: (req, res) => {
        // Recoger parametros por post
        var params = req.body;
 
            //Crear el objeto a guardar
            var litico = new Litico();
 
            // Asignar valores
            
            // litico.id_cont= params.id_cont;
            litico.content = params.content;
            litico.title=params.title;
            litico.cod_mon = params.cod_mon;
            litico.num_artefacto= params.num_artefacto;
           litico.num_caja= params.num_caja;
           litico.proyecto= params.proyecto;
           litico.investigador= params.investigador;
           litico.pro_year= params.pro_year;
           litico.etiqueta= params.etiqueta;
           litico.fecha_exc= params.fecha_exc;
            
            if(params.image){
                litico.image = params.image;
            }else{
                litico.image = null;
            }
           
            // Guardar el articulo
            litico.save((err, liticoStored) => {
 
                if(err || !liticoStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado !!!'
                    });
                }
 
                // Devolver una respuesta 
                return res.status(200).send({
                    status: 'success',
                    litico: liticoStored
                });
 
            });
     },

     getLiticos: (req, res) => {
 
        var query = Litico.find({});

        var last = req.params.last;
       

        if(last || last != undefined){
            query.limit(5);
        }

        // Find
        query.sort('-_id').exec((err, litico) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos !!!'
                });
            }

            if(!litico){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                litico
            });

        });
    },


    getLitico: (req, res) => {

        // Recoger el id de la url
        var liticoId = req.params.id;

        // Comprobar que existe
        if(!liticoId || liticoId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo !!!'
            });
        }

        // Buscar el articulo
        Litico.findById(liticoId, (err, litico) => {
            
            if(err || !litico){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo !!!'
                });
            }

            // Devolverlo en json
            return res.status(200).send({
                status: 'success',
                litico
            });

        });
    },

    update: (req, res) => {
        // Recoger el id del articulo por la url
        var liticoId = req.params.id;

        // Recoger los datos que llegan por put
        var params = req.body;

      
             litico.findOneAndUpdate({_id: liticoId}, params, {new:true}, (err, liticoUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar !!!'
                    });
                }

                if(!liticoUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo !!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    litico: liticoUpdated
                });
             });
       
       
    },

    delete: (req, res) => {
        // Recoger el id de la url
        var liticoId = req.params.id;

        // Find and delete
        litico.findOneAndDelete({_id: liticoId}, (err, liticoRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }

            if(!liticoRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                litico: liticoRemoved
            });

        }); 
    },

    upload: (req, res) => {
        // Configurar el modulo connect multiparty router/article.js (hecho)

        // Recoger el fichero de la petición
        var file_name = 'Imagen no subida...';

        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        // Conseguir nombre y la extensión del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');

        // * ADVERTENCIA * EN LINUX O MAC
        // var file_split = file_path.split('/');

        // Nombre del archivo
        var file_name = file_split[2];

        // Extensión del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        // Comprobar la extension, solo imagenes, si es valida borrar el fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            
            // borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es válida !!!'
                });
            });
        
        }else{
             // Si todo es valido, sacando id de la url
             var liticoId = req.params.id;

             if(liticoId){
                // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Litico.findOneAndUpdate({_id: liticoId}, {image: file_name}, {new:true}, (err, liticoUpdated) => {

                    if(err || !liticoUpdated){
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo !!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        litico: liticoUpdated
                    });
                });
             }else{
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });
             }
            
        }   
    }, // end upload file


    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/liticos/'+file;

        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe !!!'
                });
            }
        });
    },


    search: (req, res) => {
        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        Litico.find({ "$or": [
            { "proyecto": { "$regex": searchString, "$options": "i"}},
            { "investigador": { "$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, liticos) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }
            
            if(!liticos || liticos.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artefactos que coincidan con tu busqueda !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                liticos
            });

        });
    }

   
}; // end controler

module.exports = controller;

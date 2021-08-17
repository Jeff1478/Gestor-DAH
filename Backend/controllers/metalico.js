'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Metalico = require('../models/metalico');

var controller = {

    datosMetalico: (req, res) => {
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
            message: 'Soy la accion de mi controlador de Metalico'
        });
    },

    save: (req, res) => {
        // Recoger parametros por post
        var params = req.body;
 
            //Crear el objeto a guardar
            var metalico = new Metalico();
 
            // Asignar valores
            
            // litico.id_cont= params.id_cont;
            metalico.content = params.content;
            metalico.title=params.title;
            metalico.cod_mon = params.cod_mon;
            metalico.num_artefacto= params.num_artefacto;
           metalico.num_caja= params.num_caja;
           metalico.proyecto= params.proyecto;
           metalico.investigador= params.investigador;
           metalico.pro_year= params.pro_year;
           metalico.etiqueta= params.etiqueta;
           metalico.fecha_exc= params.fecha_exc;
            
            if(params.image){
                metalico.image = params.image;
            }else{
                metalico.image = null;
            }
           
            // Guardar el articulo
            metalico.save((err, metalicoStored) => {
 
                if(err || !metalicoStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado !!!'
                    });
                }
 
                // Devolver una respuesta 
                return res.status(200).send({
                    status: 'success',
                    metalico: metalicoStored
                });
 
            });
     },

     getMetalicos: (req, res) => {
 
        var query = Metalico.find({});

        var last = req.params.last;
       

        if(last || last != undefined){
            query.limit(5);
        }

        // Find
        query.sort('-_id').exec((err, metalico) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos !!!'
                });
            }

            if(!metalico){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                metalico
            });

        });
    },

    getMetalico: (req, res) => {

        // Recoger el id de la url
        var metalicoId = req.params.id;

        // Comprobar que existe
        if(!metalicoId || metalicoId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo !!!'
            });
        }

        // Buscar el articulo
        Metalico.findById(metalicoId, (err, metalico) => {
            
            if(err || !metalico){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo !!!'
                });
            }

            // Devolverlo en json
            return res.status(200).send({
                status: 'success',
                metalico
            });

        });
    },

    update: (req, res) => {
        // Recoger el id del articulo por la url
        var metalicoId = req.params.id;

        // Recoger los datos que llegan por put
        var params = req.body;

      
             Metalico.findOneAndUpdate({_id: metalicoId}, params, {new:true}, (err, metalicoUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar !!!'
                    });
                }

                if(!metalicoUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo !!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    metalico: metalicoUpdated
                });
             });
       
       
    },

    delete: (req, res) => {
        // Recoger el id de la url
        var metalicoId = req.params.id;

        // Find and delete
        Metalico.findOneAndDelete({_id: metalicoId}, (err, metalicoRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }

            if(!metalicoRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                metalico: metalicoRemoved
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
             var metalicoId = req.params.id;

             if(metalicoId){
                // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Metalico.findOneAndUpdate({_id: metalicoId}, {image: file_name}, {new:true}, (err, metalicoUpdated) => {

                    if(err || !metalicoUpdated){
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo !!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        metalico: metalicoUpdated
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
        var path_file = './upload/metalicos/'+file;

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
        Metalico.find({ "$or": [
            { "proyecto": { "$regex": searchString, "$options": "i"}},
            { "investigador": { "$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, metalicos) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }
            
            if(!metalicos || metalicos.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artefactos que coincidan con tu busqueda !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                metalicos
            });

        });
    }

}; // end controler

module.exports = controller;
'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Ceramic = require('../models/ceramic');

var controller = {

    datosCeramica: (req, res) => {
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
            message: 'Soy la accion de mi controlador de ceramica'
        });
    },

    save: (req, res) => {
       // Recoger parametros por post
       var params = req.body;

       // Validar datos (validator)
       /* try{
           var validate_title = !validator.isEmpty(params.title);
           var validate_content = !validator.isEmpty(params.content);
           

       }catch(err){
           return res.status(200).send({
               status: 'error',
               message: 'Faltan datos por enviar !!!'
           });
       } */

    //    if(validate_title && validate_content){
           
           //Crear el objeto a guardar
           var ceramic = new Ceramic();

           // Asignar valores
           
           ceramic.cod_mon = params.cod_mon;
           ceramic.content = params.content;
           ceramic.title=params.title;
           ceramic.num_artefacto= params.num_artefacto;
           ceramic.num_caja= params.num_caja;
           ceramic.proyecto= params.proyecto;
           ceramic.investigador= params.investigador;
           ceramic.pro_year= params.pro_year;
           ceramic.etiqueta= params.etiqueta;
           ceramic.fecha_exc= params.fecha_exc;
           ceramic.id_contexto= params.id_contexto;
           ceramic.contexto= params.contexto;
           ceramic.ubicacion= params.ubicacion;
           ceramic.foto= params.foto;
           ceramic.num_foto= params.num_foto;
           ceramic.calidad_foto= params.calidad_foto;
           ceramic.estado_foto= params.estado_foto;
           ceramic.plano= params.plano;
           ceramic.num_lamina= params.num_lamina;
           ceramic.calidad_lamina= params.calidad_lamina;
           ceramic.estado_Lamina= params.estado_Lamina;
           ceramic.diagnostico_contexto= params.diagnostico_contexto;
           ceramic.fechamiento= params.fechamiento;
           ceramic.tipo_pieza= params.tipo_pieza;
           ceramic.desc_narrativa= params.desc_narrativa;
           ceramic.apendices= params.apendices;
           ceramic.soporte= params.soporte;
           ceramic.ped_base= params.ped_base;
           ceramic.asa= params.asa;
           ceramic.vtdero= params.vtdero;
           ceramic.otro_soporte= params.otro_soporte;
           ceramic.desc_apendice= params.desc_apendice;
           ceramic.acabado_superficie= params.acabado_superficie;
           ceramic.estilo_decorativo= params.estilo_decorativo;
           ceramic.color_pintura= params.color_pintura;
           ceramic.pre_coc= params.pre_coc;
           ceramic.post_coc= params.post_coc;
           ceramic.esgraf= params.esgraf;
           ceramic.ptdo= params.ptdo;
           ceramic.tira_apl= params.tira_apl;
           ceramic.ptll= params.ptll;
           ceramic.zna= params.zna;
           ceramic.rndo= params.rndo;
           ceramic.acnlo= params.acnlo;
           ceramic.hddo= params.hddo;
           ceramic.ptdopt= params.ptdopt;
           ceramic.mdl= params.mdl;
           ceramic.vertical= params.vertical;
           ceramic.horizontal= params.horizontal;
           ceramic.zig_zag= params.zig_zag;
           ceramic.panel= params.panel;
           ceramic.aisld= params.aisld;
           ceramic.str= params.str; 
           ceramic.otro_nofig= params.otro_nofig;
           ceramic.head= params.head;
           ceramic.suario= params.suario;
           ceramic.felino= params.felino;
           ceramic.batracio= params.batracio;
           ceramic.ave= params.ave;
           ceramic.primate= params.primate;
           ceramic.murcielago= params.murcielago;
           ceramic.turtle= params.turtle;
           ceramic.reptil= params.reptil;
           ceramic.pez= params.pez;
           ceramic.indt= params.indt;
           ceramic.txn_expl= params.txn_expl;
           ceramic.investigador_zoo= params.investigador_zoo;
           ceramic.cabeza_nofig= params.cabeza_nofig;
           ceramic.sau_nofig= params.sau_nofig;
           ceramic.feli_nofig= params.feli_nofig;
           ceramic.bat_nofig= params.bat_nofig;
           ceramic.erguida_nofig= params.erguida_nofig;
           ceramic.prim_nofig= params.prim_nofig;
           ceramic.cabfigint= params.cabfigint;
           ceramic.cabhoc= params.cabhoc;
           ceramic.garra= params.garra;
           ceramic.otfigind= params.otfigind;
           ceramic.forma_funcion= params.forma_funcion;
           ceramic.marcas_uso= params.marcas_uso;
           ceramic.desc_marcas_uso= params.desc_marcas_uso;
           ceramic.tipo_ceramico_grupo= params.tipo_ceramico_grupo;
           ceramic.ceramico_refz= params.ceramico_refz;
           ceramic.periodo_ceramica= params.periodo_ceramica;
           ceramic.fase_ceramica= params.fase_ceramica;
           ceramic.temporalidad_ceramica= params.temporalidad_ceramica;
           ceramic.procedencia_ceramica= params.procedencia_ceramica;
           ceramic.estado_conservacion= params.estado_conservacion;
           ceramic.potencial= params.potencial;
           ceramic.potencial_exp= params.potencial_exp;
           ceramic.largo= params.largo;
           ceramic.ancho= params.ancho;
           ceramic.alto= params.alto;
           ceramic.peso= params.peso;
           ceramic.nombre_invest= params.nombre_invest;
           ceramic.fecha_analisis= params.fecha_analisis;
           ceramic.fotos_num= params.fotos_num;
          
           if(params.image){
               ceramic.image = params.image;
           }else{
               ceramic.image = null;
           }
          
           // Guardar el articulo
           ceramic.save((err, ceramicStored) => {

               if(err || !ceramicStored){
                   return res.status(404).send({
                       status: 'error',
                       message: 'El articulo no se ha guardado !!!'
                   });
               }

               // Devolver una respuesta 
               return res.status(200).send({
                   status: 'success',
                   ceramic: ceramicStored
               });

           });

      /*  }else{
           return res.status(200).send({
               status: 'error',
               message: 'Los datos no son válidos !!!'
           });
       } */
      

    },

    getCeramics: (req, res) => {

        var query = Ceramic.find({});

        var last = req.params.last;
       

        if(last || last != undefined){
            query.limit(5);
        }

        // Find
        query.sort('-_id').exec((err, ceramics) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos !!!'
                });
            }

            if(!ceramics){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                ceramics
            });

        });
    },


    getCeramic: (req, res) => {

        // Recoger el id de la url
        var ceramicId = req.params.id;

        // Comprobar que existe
        if(!ceramicId || ceramicId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo !!!'
            });
        }

        // Buscar el articulo
        Ceramic.findById(ceramicId, (err, ceramic) => {
            
            if(err || !ceramic){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo !!!'
                });
            }

            // Devolverlo en json
            return res.status(200).send({
                status: 'success',
                ceramic
            });

        });
    },

    update: (req, res) => {
        // Recoger el id del articulo por la url
        var ceramicId = req.params.id;

        // Recoger los datos que llegan por put
        var params = req.body;

        // Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar !!!'
            }); 
        }

        if(validate_title && validate_content){
             // Find and update
             Ceramic.findOneAndUpdate({_id: ceramicId}, params, {new:true}, (err, ceramicUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar !!!'
                    });
                }

                if(!ceramicUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo !!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    ceramic: ceramicUpdated
                });
             });
        }else{
             // Devolver respuesta
            return res.status(200).send({
                status: 'error',
                message: 'La validación no es correcta !!!'
            });
        }
       
    },

    delete: (req, res) => {
        // Recoger el id de la url
        var ceramicId = req.params.id;

        // Find and delete
        Ceramic.findOneAndDelete({_id: ceramicId}, (err, ceramicRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }

            if(!ceramicRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                ceramic: ceramicRemoved
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
             var ceramicId = req.params.id;

             if(ceramicId){
                // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Ceramic.findOneAndUpdate({_id: ceramicId}, {image: file_name}, {new:true}, (err, ceramicUpdated) => {

                    if(err || !ceramicUpdated){
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo !!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        ceramic: ceramicUpdated
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
        var path_file = './upload/ceramics/'+file;

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
        Ceramic.find({ "$or": [
            { "title": { "$regex": searchString, "$options": "i"}},
            { "content": { "$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, ceramics) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }
            
            if(!ceramics || ceramics.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artefactos que coincidan con tu busqueda !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                ceramics
            });

        });
    }

}; // end controler

module.exports = controller;

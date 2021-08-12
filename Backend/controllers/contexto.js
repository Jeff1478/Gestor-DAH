'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Contexto = require('../models/contexto');

var controller = {

    datosContexto: (req, res) => {
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
            message: 'Soy la accion de mi controlador de contexto'
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
            var contexto = new Contexto();
 
            // Asignar valores
            
            contexto. id_cont= params.id_cont;
            contexto.content = params.content;
            contexto.title=params.title;
            contexto.proyecto= params.proyecto;
            contexto.year_inv= params.year_inv;
            
            contexto.investigador= params.investigador;
           
            contexto.sector= params.sector;
            contexto.ubicacion= params.ubicacion;
            contexto.operacion= params.operacion;
            contexto.suboperacion= params.suboperacion;
            contexto.desc_operacion= params.desc_operacion;
            contexto.cont= params.cont;
            contexto.diagnostico_contexto= params.diagnostico_contexto;
            contexto.tipo_contexto= params.tipo_contexto;
            contexto.otro_contexto= params.otro_contexto;
            contexto.num_cem= params.num_cem;
            contexto.num_basa= params.num_basa;
            contexto.num_plaza= params.num_plaza;
            contexto.num_estruc= params.num_estruc;
            contexto.ind_conex= params.ind_conex;
            contexto.foto= params.foto;
            contexto.num_foto= params.num_foto;
            contexto.calidad_foto= params.calidad_foto;
            contexto.estado_foto= params.estado_foto;
            contexto.planimetria= params.planimetria;
            contexto.num_lamina= params.num_lamina;
            contexto.calidad_plano= params.calidad_plano;
            contexto.coordenadas= params.coordenadas;
            contexto.crtm= params.crtm;
            contexto.profundidad= params.profundidad;
            contexto.profundidad_datum= params.profundidad_datum;
            contexto.ubicacion_datum= params.ubicacion_datum;
            contexto.existe_antro= params.existe_antro;
            contexto.estado_antro= params.estado_antro;
            contexto.tipo_enterramiento= params.tipo_enterramiento;
            contexto.forma_enterramiento= params.forma_enterramiento;
            contexto.condicion= params.condicion;
            contexto.sexo=params.sexo;
            contexto.edad=params.edad;
            contexto.patologias=params.patologias;
            contexto.evidencia= params.evidencia;
            contexto.fecha_existe= params.fecha_existe;
            contexto.tecnica= params.tecnica;
            contexto.material_fechado= params.material_fechado;
            contexto.asociacion_indv= params.asociacion_indv;
            contexto.asociacion_art= params.asociacion_art;
            contexto.num_lab = params.num_lab;
            contexto.fecha_conv= params.fecha_conv;
            contexto.fecha_calb= params.fecha_calb;
            contexto.valoracion_fecha= params.valoracion_fecha;
            contexto.explique_fecha= params.explique_fecha;
            contexto.otras_muestras= params.otras_muestras;
            contexto.estado_muestras= params.estado_muestras;
            contexto.cera_existe= params.cera_existe; 
            contexto.cera_cant= params.cera_cant;
            contexto.id_litica= params.id_litica;
            contexto.metal_existe= params.metal_existe;
            contexto.metal_cantidad= params.metal_cantidad;
            contexto.metal_id= params.metal_id;
            contexto.madera_existe= params.madera_existe;
            contexto.madera_cantidad= params.madera_cantidad;
            contexto.madera_id= params.madera_id;
            contexto.fauna_existe= params.fauna_existe;
            contexto.fauna_cantidad= params.fauna_cantidad;
            contexto.fauna_id= params.fauna_id;
            contexto.otros_existe= params.otros_existe;
            contexto.otros_cantidad= params.otros_cantidad;
            contexto.otros_id= params.otros_id;
            contexto.verifica_si= params.verifica_si;
            contexto.inves_verifica= params.inves_verifica;
            contexto.fecha_verifica= params.fecha_verifica;
            contexto.resultados_verifica= params.resultados_verifica;
            contexto.revisor_documental= params.revisor_documental;
            contexto.fecha_revision= params.fecha_revision;
            
            
           
            if(params.image){
                contexto.image = params.image;
            }else{
                contexto.image = null;
            }
           
            // Guardar el articulo
            contexto.save((err, contextoStored) => {
 
                if(err || !contextoStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado !!!'
                    });
                }
 
                // Devolver una respuesta 
                return res.status(200).send({
                    status: 'success',
                    contexto: contextoStored
                });
 
            });
 
       /*  }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son válidos !!!'
            });
        } */
       
 
     },
 
     getContextos: (req, res) => {
 
         var query = Contexto.find({});
 
         var last = req.params.last;
        
 
         if(last || last != undefined){
             query.limit(5);
         }
 
         // Find
         query.sort('-_id').exec((err, contexto) => {
 
             if(err){
                 return res.status(500).send({
                     status: 'error',
                     message: 'Error al devolver los articulos !!!'
                 });
             }
 
             if(!contexto){
                 return res.status(404).send({
                     status: 'error',
                     message: 'No hay articulos para mostrar !!!'
                 });
             }
 
             return res.status(200).send({
                 status: 'success',
                 contexto
             });
 
         });
     },
 
 
     getcontexto: (req, res) => {
 
         // Recoger el id de la url
         var contextoId = req.params.id;
 
         // Comprobar que existe
         if(!contextoId || contextoId == null){
             return res.status(404).send({
                 status: 'error',
                 message: 'No existe el articulo !!!'
             });
         }
 
         // Buscar el articulo
         Contexto.findById(contextoId, (err, contexto) => {
             
             if(err || !contexto){
                 return res.status(404).send({
                     status: 'error',
                     message: 'No existe el articulo !!!'
                 });
             }
 
             // Devolverlo en json
             return res.status(200).send({
                 status: 'success',
                 contexto
             });
 
         });
     },
 
     update: (req, res) => {
         // Recoger el id del articulo por la url
         var contextoId = req.params.id;
 
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
              contexto.findOneAndUpdate({_id: contextoId}, params, {new:true}, (err, contextoUpdated) => {
                 if(err){
                     return res.status(500).send({
                         status: 'error',
                         message: 'Error al actualizar !!!'
                     });
                 }
 
                 if(!contextoUpdated){
                     return res.status(404).send({
                         status: 'error',
                         message: 'No existe el articulo !!!'
                     });
                 }
 
                 return res.status(200).send({
                     status: 'success',
                     contexto: contextoUpdated
                 });
              });
         /* }else{
              // Devolver respuesta
             return res.status(200).send({
                 status: 'error',
                 message: 'La validación no es correcta !!!'
             });  }*/
        
        
     },
 
     delete: (req, res) => {
         // Recoger el id de la url
         var contextoId = req.params.id;
 
         // Find and delete
         contexto.findOneAndDelete({_id: contextoId}, (err, contextoRemoved) => {
             if(err){
                 return res.status(500).send({
                     status: 'error',
                     message: 'Error al borrar !!!'
                 });
             }
 
             if(!contextoRemoved){
                 return res.status(404).send({
                     status: 'error',
                     message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                 });
             }
 
             return res.status(200).send({
                 status: 'success',
                 contexto: contextoRemoved
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
              var contextoId = req.params.id;
 
              if(contextoId){
                 // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                 Contexto.findOneAndUpdate({_id: contextoId}, {image: file_name}, {new:true}, (err, contextoUpdated) => {
 
                     if(err || !contextoUpdated){
                         return res.status(200).send({
                             status: 'error',
                             message: 'Error al guardar la imagen de articulo !!!'
                         });
                     }
 
                     return res.status(200).send({
                         status: 'success',
                         contexto: contextoUpdated
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
         var path_file = './upload/contexto/'+file;
 
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
         Contexto.find({ "$or": [
             { "proyecto": { "$regex": searchString, "$options": "i"}},
             { "investigador": { "$regex": searchString, "$options": "i"}}
         ]})
         .sort([['date', 'descending']])
         .exec((err, contextos) => {
 
             if(err){
                 return res.status(500).send({
                     status: 'error',
                     message: 'Error en la petición !!!'
                 });
             }
             
             if(!contextos || contextos.length <= 0){
                 return res.status(404).send({
                     status: 'error',
                     message: 'No hay artefactos que coincidan con tu busqueda !!!'
                 });
             }
 
             return res.status(200).send({
                 status: 'success',
                 contextos
             });
 
         });
     }

};

    module.exports = controller;
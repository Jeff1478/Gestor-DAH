'use strict'
const nodemailer = require('nodemailer');
var validator = require('validator');
var fs = require('fs');
var path = require('path');
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false for other ports
      auth: {
        user: "soporteti@museocostarica.go.cr",
        pass: "Museo2023*"}
});
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

    signin: async (req,res) => {
        const { email, password} = req.body;
        const user = await User.findOne({email})
      
        if (!user) return res.status(401).send('Correo no Existe!!');
       
        const match = await user.comparePassword(password);
       // if (user.password !== password) return res.status(401).send('Password Incorrecto!!');
        if (match){
            const token = Math.random().toString(20).substring(2,12);
            // const token = jwt.sign({_id: user._id}, 'secretkey');
            res.status(200).json({token});
    
            await transporter.sendMail({
                from: 'soporteti@museocostarica.go.cr',
                to: email,
                subject: 'Token Acceso Orígenes',
                html: `Por favor copiar el siguiente Token 
                <b>${token}</b>
                y pegarlo en el campo correspondiente en la pantalla de Login para acceder`
            }) 
    
            
        }
       
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
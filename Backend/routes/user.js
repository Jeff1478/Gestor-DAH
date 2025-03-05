'use strict'
var User = require('../models/user');
const nodemailer = require('nodemailer');

var PasswordReset = require('../models/passwordReset');
var express = require('express');
var UserController = require('../controllers/user');
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false for other ports
      auth: {
        user: "soporteti@museocostarica.go.cr",
        pass: "Museo2023*"}
});

const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

var router = express.Router();
var app = express();
var multipart = require('connect-multiparty');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Rutas de prueba
router.post('/signup', async (req,res) => {
    const {email, password, nombre} = req.body;
    const newUser = new User({email,password,nombre});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    const token = Math.random().toString(20).substring(2,12);
    // const token = jwt.sign({_id: newUser._id}, 'secretkey');
    
    res.status(200).json({token});
}); 


router.post('/signin', async (req,res)=> {
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
   
});

router.post('/forgot', async (req,res)=>{
    const email = req.body.email;
    const token = Math.random().toString(20).substring(2,12);

    const passwordReset = new PasswordReset({
        email,
        token
    })
    await passwordReset.save();

    const url = `http://localhost:4200/reset/${token}`;

    await transporter.sendMail({
        from: 'soporteti@museocostarica.go.cr',
        to: email,
        subject: 'Reseteo contraseña Origenes',
        html: `Por favor dar click <a href= "${url}">aquí<a> para restablecer su contraseña`
    })

    res.send({
        message: 'Check your email!'
    })


});

router.post('/reset', async (req,res)=>{
    if(req.body.password !== req.body.password_confirm){
        return res.status(400).send({
            message: 'Password do not match!'
        })
    }

    const passwordReset = await PasswordReset.findOne({token: req.body.token});
    const {email} = await passwordReset.toJSON();
    const user = await User.findOne({email});

    if(!user){
        return res.status(404).send({
            message: 'User not found!'
        })
    }

   
    const salt = bcrypt.genSaltSync(8);
    user.password = bcrypt.hashSync(req.body.password, salt);

    user.save();

    res.send({
        message: 'success'
    })
});


router.get('/private', verifyToken, (req, res) => {
    return res.status(200).send({
        message: 'Info Privada'
    });
});

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Sin autorización');
    }

    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send('Sin autorización');
    }

    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next();
}


 
router.post('/datos-user',UserController.datosUsuario);
router.post('/signin',UserController.signin);
router.get('/test-de-controlador',UserController.test);
router.get('/usuario/:id', UserController.getUsuario);
router.get('/search/:search', UserController.search);

//router.get('/sitios/:last?', SitioController.getSitios);


module.exports = router;
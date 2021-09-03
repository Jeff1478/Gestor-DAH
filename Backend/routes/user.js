'use strict'
var User = require('../models/user');
var express = require('express');
var UserController = require('../controllers/user');

const jwt = require ('jsonwebtoken');

var router = express.Router();

var multipart = require('connect-multiparty');
//var md_upload = multipart({ uploadDir: './upload/sitios'});

// Rutas de prueba
router.post('/signup', async (req,res) => {
    const {email, password} = req.body;
    const newUser = new User({email,password});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    const token = jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
}); 


router.post('/signin', async (req,res)=> {
    const { email, password} = req.body;
    const user = await User.findOne({email})
    if (!user) return res.status(401).send('Correo no Existe!!');
    const match = await user.comparePassword(password);
    //if (user.password !== password) return res.status(401).send('Password Incorrecto!!');
    if (match){
        const token = jwt.sign({_id: user._id}, 'secretkey');
        res.status(200).json({token});
    }
   
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
router.get('/test-de-controlador',UserController.test);
router.get('/usuario/:id', UserController.getUsuario);
router.get('/search/:search', UserController.search);

//router.get('/sitios/:last?', SitioController.getSitios);


module.exports = router;
const express = require('express');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const commons = require('./commons');
const router = express.Router();
var User = require('../models/user');

router.post('/tfa/setup', (req, res) => {
    console.log(`DEBUG: Received TFA setup request`);

    const secret = speakeasy.generateSecret({
        length: 10,
        name: 'MNCR',
        issuer: 'TIAuth v0.0'
    });
    var url = speakeasy.otpauthURL({
        secret: secret.base32,
        label: 'MNCR',
        issuer: 'TIAuth v0.0',
        encoding: 'base32'
    });
    QRCode.toDataURL(url, (err, dataURL) => {
        User.tfa = {
            secret: '',
            tempSecret: secret.base32,
            dataURL,
            tfaURL: url
        };
        return res.json({
            message: 'TFA Auth needs to be verified',
            tempSecret: secret.base32,
            dataURL,
            tfaURL: secret.otpauth_url
        });
    });
});

router.get('/tfa/setup', (req, res) => {
    console.log(`DEBUG: Received FETCH TFA request`);

    res.json(User.tfa ? User.tfa : null);
});

router.delete('/tfa/setup', (req, res) => {
    console.log(`DEBUG: Received DELETE TFA request`);

    delete User.tfa;
    res.send({
        "status": 200,
        "message": "success"
    });
});

router.post('/tfa/verify', (req, res) => {
    console.log(`DEBUG: Received TFA Verify request`);

    let isVerified = speakeasy.totp.verify({
        secret: User.tfa.tempSecret,
        encoding: 'base32',
        token: req.body.token
    });

    if (isVerified) {
        console.log(`DEBUG: TFA is verified to be enabled`);

        User.tfa.secret = User.tfa.tempSecret;
        return res.send({
            "status": 200,
            "message": "Two-factor Auth is enabled successfully"
        });
    }

    console.log(`ERROR: TFA is verified to be wrong`);

    return res.send({
        "status": 403,
        "message": "Invalid Auth Code, verification failed. Please verify the system Date and Time"
    });
});

module.exports = router;
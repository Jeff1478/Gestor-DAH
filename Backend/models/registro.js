const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const registroSchema = new Schema({
  nombre: String,
  email: String,
  perfil: String,
  setena: String,
  acceso: Boolean,
}, {
  timestamps: true
});



module.exports = mongoose.model('registro', registroSchema);
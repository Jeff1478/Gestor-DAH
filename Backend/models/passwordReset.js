const mongoose = require('mongoose');


const { Schema } = mongoose;

const passwordResetSchema = new Schema({
  email: String,
  token: String,
 
}, {
  timestamps: true
});


module.exports = mongoose.model('PasswordReset', passwordResetSchema);
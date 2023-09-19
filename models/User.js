
// Importing the Mongoose library
const mongoose = require('mongoose');

// Defining a schema for the 'User' model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, 
  email: { type: String, required: true },     
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]  
});

// Exporting the 'User' model based on the schema
module.exports = mongoose.model('User', userSchema);

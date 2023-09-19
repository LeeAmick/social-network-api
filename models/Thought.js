// Importing the Mongoose library
const mongoose = require('mongoose');

// Defining a schema for the 'Thought' model
const thoughtSchema = new mongoose.Schema({
  text: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },  
  reactions: [{ type: String }],  
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }  
});

// Exporting the 'Thought' model based on the schema
module.exports = mongoose.model('Thought', thoughtSchema);

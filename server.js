
const express = require('express');  // Importing the Express framework
const mongoose = require('mongoose');  // Importing the Mongoose library for MongoDB

// Creating an Express application
const app = express();  
const PORT = process.env.PORT || 3000;  

// parse incoming JSON requests
app.use(express.json());  

// Connecting to MongoDB
mongoose.connect('mongodb://localhost/social_network_db', { useNewUrlParser: true, useUnifiedTopology: true }); 

// Event handler 
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');  
});

// Importing routes for users and thoughts
const userRoutes = require('./routes/userRoutes'); 
const thoughtRoutes = require('./routes/thoughtRoutes');

// Attaching routes to endpoints
app.use('/api/users', userRoutes); 
app.use('/api/thoughts', thoughtRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});

// server.js
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); // Import the authentication routes

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

// Use authentication routes
app.use('/api/auth', authRoutes);  // All authentication routes will be prefixed with /api/auth

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

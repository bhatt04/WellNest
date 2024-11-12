// server.js
require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Import auth routes

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

// Middleware to enable CORS for your frontend origin
app.use(cors({ origin: "http://localhost:5173" }));

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

// Use the auth routes, with /api/auth prefix
app.use('/api/auth', authRoutes);

//jwt
const jwt = require('jsonwebtoken');

// Make sure you're loading the .env file with 'dotenv'
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

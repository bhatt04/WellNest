// // /routes/authRoutes.js
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');  // For generating JWT tokens
// const User = require('../models/userModel');
// const router = express.Router();

// // Register a new user
// router.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     // Create a new user
//     const user = new User({
//       username,
//       email,
//       password,
//     });

//     // Save the user to the database
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering user: ' + error.message });
//   }
// });

// // Login a user
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Check if the entered password matches the stored password
//     const isPasswordMatch = await user.matchPassword(password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Create a JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',  // Token expires in 1 hour
//     });

//     res.json({
//       message: 'Login successful',
//       token,  // Send the JWT token to the client
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in: ' + error.message });
//   }
// });

// module.exports = router;
// authRoutes.js
// routes/authRoutes.js
//new
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Import user model
const router = express.Router();

// Register a new user
// router.post('/register', async (req, res) => {
//   const { name,  email, password } = req.body;
// //console.log(username);
//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already in use' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save a new user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: `Error registering user: ${error.message}` });
//   }
// });

//new user register
router.post('/register', async (req, res) => {
  console.log("req received",req.body); // Log the request body
  try {
    const { name, email, password, username } = req.body;

    if (!name || !email || !password || !username) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = new User({ name, email, password, username });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



// Login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the entered password with the hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({
      message: 'Login successful',
      token,  // Send the JWT token to the client
    });
  } catch (error) {
    res.status(500).json({ message: `Error logging in: ${error.message}` });
  }
});

module.exports = router;


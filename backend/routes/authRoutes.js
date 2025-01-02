//NEWWWW 
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel'); // Import user model
// const sendRegistrationEmail = require('../utils/emailUtil'); // Import the email utility
// const router = express.Router();

// // New user register with password hashing and welcome email
// router.post('/register', async (req, res) => {
//   console.log('Request received', req.body); // Log the request body
//   try {
//     const { name, email, password, username } = req.body;

//     if (!name || !email || !password || !username) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email is already in use' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword, // Save the hashed password
//       username,
//     });

//     await newUser.save();

//     // Send welcome email
//     await sendRegistrationEmail(email);

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error in registration:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
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

//     // Compare the entered password with the hashed password
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.json({
//       message: 'Login successful',
//       token, // Send the JWT token to the client
//     });
//   } catch (error) {
//     console.error('Error in login:', error);
//     res.status(500).json({ message: `Error logging in: ${error.message}` });
//   }
// });

// module.exports = router;
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Import user model
const sendRegistrationEmail = require('../utils/emailUtil'); // Import the email utility
const router = express.Router();

// Utility function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// New user registration with password hashing and welcome email
router.post('/register', async (req, res) => {
  console.log('Request received', req.body); // Log the request body for debugging

  try {
    const { name, email, password, username } = req.body;

    // Validate required fields
    if (!name || !email || !password || !username) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Save the hashed password
      username,
    });

    await newUser.save(); // Save the new user to the database

    // Attempt to send the welcome email
    try {
      await sendRegistrationEmail(email);
      console.log(`Welcome email sent successfully to ${email}`);
    } catch (emailError) {
      console.error(`Failed to send welcome email to ${email}:`, emailError.message);
    }

    // Respond with success
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error in registration:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;

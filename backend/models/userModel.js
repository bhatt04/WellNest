// // /models/userModel.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');  // To hash passwords

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,  // Ensure the username is unique
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,  // Ensure the email is unique
//     match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // Simple email validation
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// // Hash the password before saving the user document
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();  // Only hash if password is modified

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);  // Hash the password
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Method to compare entered password with stored hashed password
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model('User', userSchema);
//const mongoose = require('mongoose');

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],  // Ensure 'name' is required
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,  // Ensure email is unique
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//   },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This is why the error is triggered
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('User', userSchema);

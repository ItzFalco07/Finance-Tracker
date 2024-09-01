const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profileUrl: {
    type: String,  // Profile picture URL
    required: false  // Not required as it might not be available initially
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

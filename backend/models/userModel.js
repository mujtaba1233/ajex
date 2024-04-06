const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add a first name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add a last name'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    role: {
      type: mongoose.Types.ObjectId,
      required: [true, 'Please add a password'],
      ref: "Roles"
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    isAdmin: {
      type: Boolean
    },
    isActivated: {
      type: Boolean,
      default: false
    }, 
    phoneNumber: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);

module.exports = User

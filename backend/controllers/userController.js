const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Role = require('../models/roleModel')
const roleModel = require('../models/roleModel')


// GET USERS
const getUsers = asyncHandler(async (req, res) => {
  try {
    const { search, page, limit } = req.query;

    const filter = {
      $and: [
        { $or: [{ firstName: { $regex: new RegExp(search, 'i') } }, { lastName: { $regex: new RegExp(search, 'i') } }] },
        { 'role.name': { $nin: ['Super Admin'] } } // Exclude users with role 'Super Admin'
      ]
    };

    const users = await User.aggregate([
      { $match: filter },
      { $lookup: { from: 'roles', localField: 'role', foreignField: '_id', as: 'role' } },
      { $unwind: '$role' },
      { $match: { 'role.name': { $nin: ['Super Admin'] } } },
      { $project: { password: 0 } }, // Exclude password field
      // { $skip: (page - 1) * limit }, // Skip documents based on page number and limit
      // { $limit: parseInt(limit) } // Limit the number of documents returned per page
    ]);

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, role, isActivated, password, phoneNumber } = req.body

  if (!firstName || !lastName || !role || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const selectedRole = await Role.findOne({ name: role });
  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    phoneNumber,
    firstName,
    email,
    isAdmin: selectedRole.name === 'Admin' ? true : false,
    role: selectedRole._id,
    isActivated,
    lastName,
    password: hashedPassword,
  })

  if (user) {
    const { password, ...userData } = user.toObject(); // Converting to plain object to manipulate properties

    res.status(201).json({...userData, role : {name : selectedRole.name}})
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email }).populate('role');
  console.log(user, "This is the user ")
  if (!user?.isActivated) {
    res.status(400)
    throw new Error('User is blocked')
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      role: user.role.name,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

const updateUser = asyncHandler(async (req, res) => {
  const { _id, ...updates } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(_id);
    let userRoles;
    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }

    // Update user with properties from req.body
    for (const key in updates) {
      // Loop through each key in the updates object
      if (Object.hasOwnProperty.call(updates, key)) {
        // Check if the key is a direct property of the updates object (not inherited)
        if (key === 'password' && updates[key]) {

          // Hash password
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(updates[key], salt);
          user[key] = hashedPassword;
          // Store the hashed password
        } else if (key === 'role') {
           userRoles = await roleModel.find({ name: updates[key] });
          user[key] = userRoles[0]._id;
        } else {
          // If the key is not 'password' or it's empty, update the user object directly
          user[key] = updates[key];
        }
      }
    }

    // Save the updated user
    await user.save();

    // Extract only the necessary properties from the user object
    const { password, ...userData } = user.toObject(); // Converting to plain object to manipulate properties

    // Sending only the required user data in the response
    res.status(200).json({...userData, role: {name : userRoles[0].name}});
  } catch (error) {
    res.status(400);
    throw new Error(error.message || 'Error updating user');
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {

    await User.deleteOne({ _id: id });

    res.json({
      id,
      message: `User ${id} deleted succesfully.`
    });
  } catch (error) {
    console.log(error)
    res.status(400);
    throw new Error(error.message || 'Error deleting user');
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  getUsers,
  updateUser,
  registerUser,
  loginUser,
  getMe,
  deleteUser,
}
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel'); // Assuming the User model is converted to Sequelize
const Role = require('../models/roleModel'); // Assuming the Role model is converted to Sequelize
const { Op } = require('sequelize');


// GET USERS
const getUsers = asyncHandler(async (req, res) => {
  try {
    let filter = {
      include: {
        model: Role,
        where: {
          name: { [Op.notIn]: ['Super Admin'] } // Exclude users with role 'Super Admin'
        },
        attributes: ['name'],
      },
      attributes: { exclude: ['password'] }, // Exclude password field
    };

    const { search } = req.query;

    if (search) {
      filter.where = {
        [Op.or]: [
          { firstName: { [Op.iLike]: `%${search}%` } },
          { lastName: { [Op.iLike]: `%${search}%` } }
        ]
      };
    }

    const users = await User.findAll(filter);

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Register new user
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, role, isActivated, password, phoneNumber } = req.body;

  if (!firstName || !lastName || !role || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const selectedRole = await Role.findOne({ where: { name: role } });

  if (!selectedRole) {
    res.status(400);
    throw new Error('Role not found');
  }

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    phoneNumber,
    firstName,
    email,
    isAdmin: selectedRole.name === 'Admin',
    roleId: selectedRole.id,
    isActivated,
    lastName,
    password: hashedPassword,
  });

  const userData = user.toJSON();
  delete userData.password;

  res.status(201).json({ ...userData, Role: { name: selectedRole.name } });
});

// Authenticate a user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Query for the user including the associated role
  const user = await User.findOne({ 
    where: { email }, 
    include: [{ model: Role }], // Use the actual model name instead of a string
  });

  console.log(user, "This is the user")
  if (!user || !user.isActivated) {
    res.status(400);
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(400);
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' });

  res.json({
    _id: user.id,
    email: user.email,
    role: user.Role.name, // Access the role through the associated model
    token,
  });
});

// Update user
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.user; // Assuming authenticated user's ID is attached to request object

  const updates = req.body;

  const user = await User.findByPk(id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  for (const key in updates) {
    if (Object.hasOwnProperty.call(updates, key)) {
      if (key === 'password' && updates[key]) {
        const hashedPassword = await bcrypt.hash(updates[key], 10);
        user[key] = hashedPassword;
      } else if (key === 'role') {
        const selectedRole = await Role.findOne({ where: { name: updates[key] } });
        if (!selectedRole) {
          res.status(400);
          throw new Error('Role not found');
        }
        user[key + 'Id'] = selectedRole.id;
      } else {
        user[key] = updates[key];
      }
    }
  }

  await user.save();

  const userData = user.toJSON();
  delete userData.password;

  res.status(200).json({ ...userData, role: { name: userData.role.name } });
});

// Delete user
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  await user.destroy();

  res.json({
    id,
    message: `User ${id} deleted successfully.`,
  });
});

// Get user data
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id); // Assuming authenticated user's ID is attached to request object

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json(user);
});

module.exports = {
  getUsers,
  updateUser,
  registerUser,
  loginUser,
  getMe,
  deleteUser,
};

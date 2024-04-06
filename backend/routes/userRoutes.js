const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.get('/', protect, getUsers)
router.put('/', protect, updateUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.delete('/:id', protect, deleteUser)

module.exports = router
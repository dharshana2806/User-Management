const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { auth, admin } = require('../middleware/auth');

// @route   GET /users
// @desc    Get all users (admin only)
router.get('/users', auth, admin, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
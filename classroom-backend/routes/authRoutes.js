// // routes/auth.js
// const express = require('express');
// const router = express.Router();
// const { login, signup } = require('../controllers/authController');

// // Login Route
// router.post('/login', login);

// // Signup Route
// router.post('/signup', signup);

// module.exports = router;

const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;

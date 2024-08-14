// // routes/userRoutes.js
// const express = require('express');
// const { registerUser, loginUser, getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
// const { protect } = require('../middlewares/auth');
// const router = express.Router();

// router.route('/').get(protect, getAllUsers);
// router.route('/register').post(protect, registerUser);
// router.route('/login').post(loginUser);
// router.route('/:id').put(protect, updateUser).delete(protect, deleteUser);

// module.exports = router;
const express = require('express');
const { getUsers } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getUsers);

module.exports = router;

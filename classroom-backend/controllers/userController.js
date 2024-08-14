// // controllers/userController.js
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// };

// const registerUser = async (req, res) => {
//   const { name, email, password, role } = req.body;
//   const user = new User({ name, email, password, role });
//   await user.save();
//   res.status(201).json({ token: generateToken(user._id) });
// };

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (user && (await user.matchPassword(password))) {
//     res.json({ token: generateToken(user._id) });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// };

// const getAllUsers = async (req, res) => {
//   const users = await User.find({});
//   res.json(users);
// };

// const updateUser = async (req, res) => {
//   const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(user);
// };

// const deleteUser = async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);
//   res.json({ message: 'User removed' });
// };

// module.exports = { registerUser, loginUser, getAllUsers, updateUser, deleteUser };
const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers };

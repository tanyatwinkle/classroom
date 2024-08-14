// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');
// const classroomRoutes = require('./routes/classroomRoutes');

// dotenv.config();
// connectDB();

// // const app = express();
// // app.use(express.json());

// // app.use('/api/users', userRoutes);
// // app.use('/api/classrooms', classroomRoutes);

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // const express = require('express');
// // const mongoose = require('mongoose');
// // require('dotenv').config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware to parse JSON requests
// // app.use(express.json());

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log('MongoDB connected'))
// //   .catch(err => console.error('MongoDB connection error:', err));

// // // Define routes (you can import and use your routes here)
// // // app.use('/api/users', require('./routes/userRoutes'));

// // app.listen(PORT, () => {
// //   console.log(`Server running on http://localhost:${PORT}`);
// // });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/classrooms', require('./routes/classroomRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

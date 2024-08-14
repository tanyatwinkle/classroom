// // routes/classroomRoutes.js
// const express = require('express');
// const { createClassroom, assignTeacher, getAllClassrooms, getClassroom, deleteClassroom } = require('../controllers/classroomController');
// const { protect } = require('../middlewares/auth');
// const router = express.Router();

// router.route('/').get(protect, getAllClassrooms).post(protect, createClassroom);
// router.route('/:id').get(protect, getClassroom).delete(protect, deleteClassroom);
// router.route('/:id/assign-teacher').put(protect, assignTeacher);

// module.exports = router;
const express = require('express');
const { createClassroom, assignTeacher, assignStudents } = require('../controllers/classroomController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createClassroom);
router.post('/assign-teacher', authMiddleware, assignTeacher);
router.post('/assign-students', authMiddleware, assignStudents);

module.exports = router;

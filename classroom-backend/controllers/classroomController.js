// // controllers/classroomController.js
// const Classroom = require('../models/Classroom');
// const User = require('../models/User');

// const createClassroom = async (req, res) => {
//   const { name, startTime, endTime, days } = req.body;
//   const classroom = new Classroom({ name, startTime, endTime, days });
//   await classroom.save();
//   res.status(201).json(classroom);
// };

// const getAllClassrooms = async (req, res) => {
//   const classrooms = await Classroom.find({}).populate('teacher students');
//   res.json(classrooms);
// };

// const getClassroom = async (req, res) => {
//   const classroom = await Classroom.findById(req.params.id).populate('teacher students');
//   res.json(classroom);
// };

// const assignTeacher = async (req, res) => {
//   const { teacherId } = req.body;
//   const classroom = await Classroom.findById(req.params.id);
//   const teacher = await User.findById(teacherId);

//   if (teacher && teacher.role === 'Teacher') {
//     classroom.teacher = teacher;
//     await classroom.save();
//     res.json(classroom);
//   } else {
//     res.status(400).json({ message: 'Invalid teacher' });
//   }
// };

// const deleteClassroom = async (req, res) => {
//   await Classroom.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Classroom removed' });
// };

// module.exports = { createClassroom, getAllClassrooms, getClassroom, assignTeacher, deleteClassroom };
const Classroom = require('../models/Classroom');
const User = require('../models/User');

const createClassroom = async (req, res) => {
  try {
    const { name, startTime, endTime, days } = req.body;

    const classroom = new Classroom({ name, startTime, endTime, days });
    await classroom.save();

    res.status(201).json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const assignTeacher = async (req, res) => {
  try {
    const { classroomId, teacherId } = req.body;

    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    classroom.teacher = teacherId;
    await classroom.save();

    res.json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const assignStudents = async (req, res) => {
  try {
    const { classroomId, studentIds } = req.body;

    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    classroom.students = studentIds;
    await classroom.save();

    res.json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createClassroom, assignTeacher, assignStudents };

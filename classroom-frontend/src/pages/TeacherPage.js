import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherPage = () => {
  const [students, setStudents] = useState([]);
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Fetch students assigned to the teacher
        const response = await axios.get('http://localhost:5000/api/classrooms/teacher-students', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setStudents(response.data.students);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleTimetableChange = (newTimetable) => {
    setTimetable(newTimetable);
  };

  const handleTimetableSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/classrooms/create-timetable', timetable, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      // Notify success
    } catch (error) {
      console.error('Error creating timetable:', error);
    }
  };

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <h3>Students List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Create Timetable</h3>
        {/* Implement timetable form here */}
        <button onClick={handleTimetableSubmit}>Submit Timetable</button>
      </div>
    </div>
  );
};

export default TeacherPage;

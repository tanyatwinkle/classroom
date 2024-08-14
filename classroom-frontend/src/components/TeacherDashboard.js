import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TimetableForm from '../components/TimetableForm';

const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
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
      <TimetableForm />
    </div>
  );
};

export default TeacherDashboard;

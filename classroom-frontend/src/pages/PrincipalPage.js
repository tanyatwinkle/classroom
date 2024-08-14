import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from '../components/UserTable';
import ClassroomForm from '../components/ClassroomForm';

const PrincipalPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setTeachers(response.data.filter(user => user.role === 'Teacher'));
        setStudents(response.data.filter(user => user.role === 'Student'));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    // Implement edit functionality
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTeachers(teachers.filter(user => user._id !== userId));
      setStudents(students.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Principal Dashboard</h2>
      <UserTable users={teachers} onEdit={handleEdit} onDelete={handleDelete} />
      <UserTable users={students} onEdit={handleEdit} onDelete={handleDelete} />
      <ClassroomForm />
    </div>
  );
};

export default PrincipalPage;

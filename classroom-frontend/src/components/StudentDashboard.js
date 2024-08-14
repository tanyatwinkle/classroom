import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [classroom, setClassroom] = useState(null);

  useEffect(() => {
    const fetchClassroom = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/classrooms/student-classroom', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setClassroom(response.data);
      } catch (error) {
        console.error('Error fetching classroom:', error);
      }
    };

    fetchClassroom();
  }, []);

  return (
    <div>
      <h2>Student Dashboard</h2>
      {classroom ? (
        <>
          <h3>Classroom Information</h3>
          <p>Name: {classroom.name}</p>
          <p>Timetable:</p>
          <ul>
            {classroom.timetable.map((period, index) => (
              <li key={index}>{period.day}: {period.startTime} - {period.endTime}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading classroom information...</p>
      )}
    </div>
  );
};

export default StudentDashboard;

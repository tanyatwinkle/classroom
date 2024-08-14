import React, { useState } from 'react';
import axios from 'axios';

const ClassroomForm = () => {
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [days, setDays] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/classrooms/create', { name, startTime, endTime, days }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      // Clear form fields or redirect
    } catch (error) {
      console.error('Error creating classroom:', error);
    }
  };

  return (
    <div>
      <h2>Create Classroom</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Start Time:</label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
        <label>End Time:</label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
        <label>Days:</label>
        <input type="text" value={days} onChange={(e) => setDays(e.target.value.split(','))} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ClassroomForm;

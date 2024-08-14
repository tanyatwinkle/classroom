import React, { useState } from 'react';
import axios from 'axios';

const TimetableForm = () => {
  const [timetable, setTimetable] = useState([]);
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleAddPeriod = () => {
    setTimetable([...timetable, { day, startTime, endTime }]);
    setDay('');
    setStartTime('');
    setEndTime('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/classrooms/create-timetable', { timetable }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      // Clear or redirect
    } catch (error) {
      console.error('Error creating timetable:', error);
    }
  };

  return (
    <div>
      <h2>Create Timetable</h2>
      <form onSubmit={handleSubmit}>
        <label>Day:</label>
        <input type="text" value={day} onChange={(e) => setDay(e.target.value)} required />
        <label>Start Time:</label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
        <label>End Time:</label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
        <button type="button" onClick={handleAddPeriod}>Add Period</button>
        <button type="submit">Submit Timetable</button>
      </form>
      <h3>Timetable</h3>
      <ul>
        {timetable.map((period, index) => (
          <li key={index}>{period.day}: {period.startTime} - {period.endTime}</li>
        ))}
      </ul>
    </div>
  );
};

export default TimetableForm;

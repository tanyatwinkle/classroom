import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Classroom Management System</h1>
      <nav>
        <Link to="/principal">Principal Login</Link>
        <Link to="/teacher">Teacher Login</Link>
        <Link to="/student">Student Login</Link>
      </nav>
    </div>
  );
};

export default Home;

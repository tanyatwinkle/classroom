// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Import the CSS file for the home page

// function Home() {
//   return (
//     <div className="home">
//       <header className="home-header">
//         <h1>Welcome to the Classroom Management System</h1>
//         <p>Your one-stop solution for managing classrooms, students, and teachers.</p>
//         <nav className="home-nav">
//           <Link to="/login" className="nav-link">Login</Link>
//           <Link to="/register" className="nav-link">Register</Link>
//           <Link to="/dashboard" className="nav-link">Dashboard</Link>
//         </nav>
//       </header>
//       <section className="home-content">
//         <h2>Features</h2>
//         <ul>
//           <li>Manage classrooms and assign teachers</li>
//           <li>Manage students and their assignments</li>
//           <li>Create and view timetables</li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for the home page

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Classroom Management System</h1>
        <p>Your one-stop solution for managing classrooms, students, and teachers.</p>
        <nav className="home-nav">
          <Link to="/principal-login" className="nav-link">Principal Login</Link>
          <Link to="/teacher-login" className="nav-link">Teacher Login</Link>
          <Link to="/student-login" className="nav-link">Student Login</Link>
        </nav>
      </header>
    </div>
  );
}

export default Home;

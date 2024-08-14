// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Login from './pages/Login';
// // import Dashboard from './pages/Dashboard';


// // function App() {
// //   return (
// //     <Router>
// //       <Navbar /> {/* Using Navbar */}
// //       <Routes>
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/dashboard" element={<Dashboard />} />
// //         <Route path="/" element={<Login />} />
// //       </Routes>
// //     </Router>
// //   );
// // }


// // export default App;
// import './styles.css';
// import Home from './components/home';
// import React from 'react';
// import PrincipalLogin from './components/PrincipalLogin';
// import TeacherLogin from './components/TeacherLogin';
// import StudentLogin from './components/StudentLogin';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Navbar from './components/Navbar'; // Importing Navbar
// import { AuthProvider } from './context/AuthContext'; // Importing AuthProvider

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar /> {/* Using Navbar */}
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Login />} />
//           <Route path="/" element={<Home />} />
//         <Route path="/principal-login" element={<PrincipalLogin />} />
//         <Route path="/teacher-login" element={<TeacherLogin />} />
//         <Route path="/student-login" element={<StudentLogin />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrincipalPage from './pages/PrincipalPage';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<PrincipalPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/student" element={<StudentPage />} />
      </Routes>
    </Router>
  );
};

export default App;

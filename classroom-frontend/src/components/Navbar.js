// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useAuth();

//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         {user ? (
//           <>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             <li><button onClick={logout}>Logout</button></li>
//           </>
//         ) : (
//           <li><Link to="/login">Login</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/principal">Principal</Link></li>
        <li><Link to="/teacher">Teacher</Link></li>
        <li><Link to="/student">Student</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

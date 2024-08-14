// // // src/pages/Dashboard.js
// // import React, { useEffect, useState } from 'react';
// // import { useAuth } from '../context/AuthContext';
// // import { getAllClassrooms } from '../api';

// // const Dashboard = () => {
// //   const { user } = useAuth();
// //   const [classrooms, setClassrooms] = useState([]);

// //   useEffect(() => {
// //     const fetchClassrooms = async () => {
// //       const { data } = await getAllClassrooms();
// //       setClassrooms(data);
// //     };
// //     fetchClassrooms();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Welcome, {user.name}</h1>
// //       <h2>Your Classrooms:</h2>
// //       <ul>
// //         {classrooms.map((classroom) => (
// //           <li key={classroom._id}>{classroom.name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React from 'react';

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       <h1>Dashboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Column 1</th>
//             <th>Column 2</th>
//             <th>Column 3</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Data 1</td>
//             <td>Data 2</td>
//             <td>Data 3</td>
//           </tr>
//           {/* More rows as needed */}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Dashboard;


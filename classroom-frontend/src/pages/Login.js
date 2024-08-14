// // // src/pages/Login.js
// // import React, { useState } from 'react';
// // import { useAuth } from '../context/AuthContext';
// // import { loginUser } from '../api';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const { login } = useAuth();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const { data } = await loginUser({ email, password });
// //     login(data);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// //       <button type="submit">Login</button>
// //     </form>
// //   );
// // };

// // export default Login;
// import React from 'react';

// function Login() {
//   return (
//     <div className="login-container">
//       <h1>Login Page</h1>
//       <form>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


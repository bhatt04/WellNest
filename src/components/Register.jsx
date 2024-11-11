// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//      const response = await axios.post(
//        "/api/auth/register",
//        {
//          name,
//          email,
//          password,
//          username,
//        }
//      );

//       navigate("/login");
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700 transition duration-300"
//           >
//             Register
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
        username,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data.message || "Error registering");
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-900 to-transparent
opacity-50"
        style={{
          backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
          transition: "background-position 0.3s ease-out",
        }}
      ></div>
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      {/* Register Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div
          className="bg-white p-4 rounded-2xl shadow-xl max-w-md w-full text-center transform transition
duration-500 hover:scale-105"
        >
          <h1 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-blue-900">
            Create Account
          </h1>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-2 focus:outline-none focus:ring-2
focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-2 focus:outline-none focus:ring-2
focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-2 focus:outline-none focus:ring-2
focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2
focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-1/4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg
shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-gray-700">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
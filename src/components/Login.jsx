// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useUser } from "../context/UserContext"; // Import the context
// import axios from "axios";
// const Login = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { setUserId } = useUser(); // Get setUserId from context
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );
//       // Save token and userId in context
//       localStorage.setItem("token", response.data.token);
//       setUserId(response.data.userId); // Set userId in context
//       navigate("/home"); // Navigate after login
//     } catch (err) {
//       setError(err.response?.data.message || "Error logging in");
//     }
//   };
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-900 to-pink-200 text-white">
//       {/* Dynamic Background */}
      
//       {/* Floating Particles */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
        
//       </div>
//       {/* Login Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen">
//         <div
//           className="bg-white p-4 rounded-2xl shadow-xl max-w-md w-full text-center transform transition
// duration-500 hover:scale-105"
//         >
//           <h1 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-blue-900">
//             Login
//           </h1>
//           {error && <p className="text-red-500 mb-2">{error}</p>}
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-2 focus:outline-none focus:ring-2
// focus:ring-blue-500"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-2 focus:outline-none focus:ring-2
// focus:ring-blue-500"
//               required
//             />
//             <button
//               type="submit"
//               className="w-1/4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg
// shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
//             >
//               Login
//             </button>
//           </form>
//           <p className="mt-4 text-gray-700">
//             Don’t have an account?{" "}
//             <Link
//               to="/register"
//               className="text-blue-600 font-semibold hover:underline"
//             >
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Import the context
import { users } from "../backend/db/users"; // Import mock users data

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUserId } = useUser(); // Get setUserId from context

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find user based on email
    const user = users.find((user) => user.email === email);

    if (user) {
      // Check password
      if (user.password === password) {
        // Set userId in context
        setUserId(user.id);
        localStorage.setItem("userId", user.id); // Store userId in localStorage if needed

        // Redirect to /journal after successful login
        navigate("/journal");
      } else {
        setError("Incorrect password.");
      }
    } else {
      setError("User not found.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-900 to-pink-200 text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none"></div>
      
      {/* Login Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div
          className="bg-white p-4 rounded-2xl shadow-xl max-w-md w-full text-center transform transition
          duration-500 hover:scale-105"
        >
          <h1 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-blue-900">
            Login
          </h1>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-1/4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-gray-700">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

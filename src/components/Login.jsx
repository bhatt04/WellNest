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
      
      {/* Login Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen bg-sky-100">
        <div
          className="bg-white p-4 rounded-2xl shadow-xl max-w-md w-full text-center transform transition duration-500 hover:scale-105">
          <h1 className="text-3xl font-extrabold mb-4 text-blue-600">
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
              className="w-1/4 py-3 bg-white text-pink-600 border-2 border-pink-600 font-semibold rounded-lg shadow-lg hover:bg-pink-400 hover:text-white"
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

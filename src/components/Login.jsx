import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUserId } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to login
      const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
      
      // Set user ID in context and save token in localStorage
      setUserId(response.data.userId);
      localStorage.setItem("token", response.data.token); // Optional, save token for further API requests

      // Redirect on successful login
      navigate("/journal");
    } catch (error) {
      // Set error message if login fails
      if (error.response) {
        setError(error.response.data.message); // From backend error message
      } else {
        setError("Server error. Please try again.");
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-900 to-pink-200 text-white">      
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

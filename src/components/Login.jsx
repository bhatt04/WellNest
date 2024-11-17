// Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for feedback
  const navigate = useNavigate();
  const { setUserId } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send a POST request to login
      const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
      
      // Set user ID in context and save token in localStorage
      setUserId(response.data.userId);
      localStorage.setItem("token", response.data.token);

      // Redirect on successful login
      navigate("/userProfile");
    } catch (error) {
      // Set error message if login fails
      setError(
        error.response?.data?.message || "An error occurred. Please try again.\."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-900 to-pink-200 text-white">
      <div className="relative z-10 flex items-center justify-center min-h-screen bg-opacity-75 bg-sky-100">
        <div
          className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center transform transition duration-500 hover:scale-105"
        >
          <h1 className="text-3xl font-extrabold mb-6 text-blue-600">
            Login
          </h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
           <button
  type="submit"
  disabled={loading} // Disable button while loading
  className={`w-full py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg transition-colors hover:bg-pink-500 ${
    loading ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {loading ? "Logging in..." : "Login"}
</button>
          </form>
          <p className="mt-6 text-gray-700">
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

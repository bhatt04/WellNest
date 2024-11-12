import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [username, setUsername] = useState("");
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
      const response = await axios.post("http://localhost:3000/api/auth/register", {
        name,
        email,
        password
       
      });
      navigate("/login");
    } catch (err) {
      console.log({ name, email, password });
      console.log(err.response);

      setError(err.response?.data.message || "Error registering");
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-sky-100 text-white">
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div
          className="bg-white p-4 rounded-2xl shadow-xl max-w-md w-full text-center transform transition
duration-500 hover:scale-105"
        >
          <h1 className="text-3xl font-extrabold mb-4 text-blue-600">
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
            {/* <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border text-blue-950 font-semibold p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2
focus:ring-blue-500"
              required
            /> */}
            <button
              type="submit"
              className="w-1/4 py-3 bg-white text-pink-600 border-2 border-pink-600 font-semibold rounded-lg shadow-lg hover:bg-pink-400 hover:text-white">
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
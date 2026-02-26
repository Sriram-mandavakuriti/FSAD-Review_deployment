import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="flex w-full max-w-6xl shadow-2xl rounded-3xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-12 w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Join WebEdu!
          </motion.h2>

          <p className="text-lg text-center mb-8">
            Create your account and start attending or hosting
            powerful educational webinars.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
            alt="Register Illustration"
            className="w-64"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 to-black text-white p-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded-xl bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded-xl bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-xl bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 mb-6 rounded-xl bg-gray-800 border border-gray-600"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition shadow-lg"
          >
            Register
          </button>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-purple-400 cursor-pointer"
            >
              Login
            </span>
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Register;
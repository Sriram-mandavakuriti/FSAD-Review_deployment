import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 150, -150, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -200, 200, 0], y: [0, 150, -150, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 opacity-30 rounded-full blur-3xl"
        />
      </div>

      <div className="flex w-full max-w-6xl shadow-2xl rounded-3xl overflow-hidden">

        {/* 🎨 LEFT SIDE IMAGE / INFO */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-12 w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Welcome Back!
          </motion.h2>

          <p className="text-lg text-center mb-8">
            Manage your webinars, track registrations,
            and host live sessions effortlessly.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Login Illustration"
            className="w-60"
          />
        </div>

        {/* 🔐 RIGHT SIDE LOGIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-white/10 backdrop-blur-xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Login to WebEdu
          </h2>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mb-5 rounded-xl bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-xl bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Role Selector */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 mb-6 rounded-xl bg-white/20 border border-white/30 text-white"
          >
            <option value="user" className="text-black">User</option>
            <option value="admin" className="text-black">Admin</option>
          </select>

          <button
            onClick={() =>
              role === "admin"
                ? navigate("/admin")
                : navigate("/user")
            }
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition shadow-lg"
          >
            Login
          </button>

          <p className="mt-6 text-center text-sm text-gray-300">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-purple-400 cursor-pointer"
            >
              Register
            </span>
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Login;
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Home, User, Mail, Lock } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* 🌌 Animated Gradient Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-20 bg-gradient-to-br from-indigo-700 via-purple-800 to-blue-700 bg-[length:300%_300%]"
      />

      {/* ✨ Floating Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"
        />
      </div>

      {/* 🏠 Premium Home Icon */}
      <Link to="/" className="absolute top-6 left-6 z-50 group">
        <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-blue-500/40 hover:scale-110 transition duration-300">
          <Home size={22} className="text-white group-hover:text-blue-400 transition" />
        </div>
      </Link>

      {/* 🧊 Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl bg-white/10 border border-white/20"
      >

        {/* 🎨 Left Panel */}
        <div className="hidden md:flex flex-col justify-center items-center p-12 w-1/2 bg-gradient-to-br from-white/10 to-white/5">
          <h2 className="text-4xl font-extrabold mb-6 text-center">
            Join WebEdu
          </h2>
          <p className="text-lg text-center text-white/80">
            Create your account and start hosting or attending powerful webinars.
          </p>
        </div>

        {/* 📝 Register Form */}
        <div className="w-full md:w-1/2 p-12">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Create Account
          </h2>

          {/* Full Name */}
          <div className="relative mb-6">
            <User className="absolute left-4 top-3 text-white/60" size={18} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <Mail className="absolute left-4 top-3 text-white/60" size={18} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <Lock className="absolute left-4 top-3 text-white/60" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Role */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 mb-8 rounded-xl bg-white/10 border border-white/20 text-white"
          >
            <option value="user" className="text-black">User</option>
            <option value="admin" className="text-black">Admin</option>
          </select>

          {/* Premium Button */}
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-105 transition shadow-lg"
          >
            Register
          </button>

          <p className="mt-6 text-center text-sm text-white/70">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>

        </div>
      </motion.div>
    </div>
  );
};

export default Register;
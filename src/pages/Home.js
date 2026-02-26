import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* 🔥 Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -150, 150, 0], y: [0, 100, -100, 0] }}
          transition={{ repeat: Infinity, duration: 25 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 opacity-30 rounded-full blur-3xl"
        />
      </div>

      {/* 🚀 HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center pt-32 pb-24 px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          WebEdu
        </motion.h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl">
          A modern web-based platform for hosting interactive webinars,
          managing registrations, and delivering premium learning experiences.
        </p>

        <div className="mt-10 flex gap-6">
          <Link
            to="/login"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:scale-110 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-8 py-3 bg-white text-black rounded-xl hover:scale-110 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {/* ✨ FEATURES SECTION */}
      <div className="py-24 px-10 bg-white text-black text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Why Choose WebEdu?
        </motion.h2>

        <p className="text-gray-500 mb-16">
          Everything you need for a complete online learning ecosystem
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-3xl shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100"
          >
            <div className="text-5xl mb-5">🎥</div>
            <h3 className="text-xl font-bold mb-3">
              Live Interactive Sessions
            </h3>
            <p className="text-gray-600">
              Host and attend live sessions with real-time
              engagement and webinar lifecycle control.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-3xl shadow-xl bg-gradient-to-br from-purple-50 to-pink-100"
          >
            <div className="text-5xl mb-5">📊</div>
            <h3 className="text-xl font-bold mb-3">
              Analytics Dashboard
            </h3>
            <p className="text-gray-600">
              Monitor registrations, manage participants,
              and analyze webinar performance.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-3xl shadow-xl bg-gradient-to-br from-indigo-50 to-blue-100"
          >
            <div className="text-5xl mb-5">📚</div>
            <h3 className="text-xl font-bold mb-3">
              Resource Management
            </h3>
            <p className="text-gray-600">
              Upload, limit, and manage webinar resources
              with structured control.
            </p>
          </motion.div>

        </div>
      </div>

      {/* 📈 STATS SECTION */}
      <div className="py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-center">
        <div className="grid md:grid-cols-3 gap-10">

          <motion.div whileInView={{ scale: [0.8, 1] }}>
            <h3 className="text-5xl font-bold">100+</h3>
            <p className="mt-3">Webinars Hosted</p>
          </motion.div>

          <motion.div whileInView={{ scale: [0.8, 1] }}>
            <h3 className="text-5xl font-bold">500+</h3>
            <p className="mt-3">Active Learners</p>
          </motion.div>

          <motion.div whileInView={{ scale: [0.8, 1] }}>
            <h3 className="text-5xl font-bold">24/7</h3>
            <p className="mt-3">Platform Availability</p>
          </motion.div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="py-8 text-center bg-black text-gray-400">
        © 2026 WebEdu. All rights reserved.
      </div>

    </div>
  );
};

export default Home;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-indigo-700"
        >
          WebEdu
        </motion.h1>

        <p className="mt-4 text-gray-600 text-lg">
          Web-Based Platform for Educational Webinars & Workshops
        </p>

        <div className="mt-8 space-x-4">
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            Register
          </Link>
        </div>
      </div>

      {/* WHY CHOOSE SECTION */}
      <div className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-3">
          Why Choose WebEdu?
        </h2>

        <p className="text-gray-500 mb-12">
          Everything you need for a complete online learning experience
        </p>

        <div className="grid md:grid-cols-3 gap-10 px-10">
          
          {/* Feature 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50"
          >
            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-xl font-semibold mb-2">
              Live Interactive Sessions
            </h3>
            <p className="text-gray-600">
              Engage with instructors in real-time, ask questions,
              and participate in discussions during live webinars.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50"
          >
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">
              On-Demand Recordings
            </h3>
            <p className="text-gray-600">
              Access session recordings anytime and review
              materials at your own pace.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-pink-50 to-purple-50"
          >
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">
              Comprehensive Resources
            </h3>
            <p className="text-gray-600">
              Download slides, code samples, and supplementary
              materials to enhance your learning experience.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Home;
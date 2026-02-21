import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700">

      {/* Floating Circles Background */}
      <div className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-xl bg-white/20 p-16 rounded-3xl shadow-2xl text-center border border-white/30"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold text-white tracking-wide"
        >
          WebEdu
        </motion.h1>

        <p className="mt-6 text-lg text-white/90">
          Advanced Educational Webinar & Workshop Platform
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link
            to="/login"
            className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg hover:scale-110 transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-8 py-3 bg-indigo-900 text-white font-semibold rounded-xl shadow-lg hover:scale-110 transition duration-300"
          >
            Register
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

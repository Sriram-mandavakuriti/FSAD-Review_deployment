import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="relative min-h-screen font-sans text-gray-900 dark:text-gray-200 overflow-x-hidden">

      {/* ===== Animated Background ===== */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-500 dark:from-slate-900 dark:via-black dark:to-slate-950 bg-[length:300%_300%]"
      />

      {/* ===== Navbar ===== */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            WebEdu
          </h1>

          <div className="flex gap-8 items-center text-sm font-medium">
            <a href="#hero">Home</a>
            <a href="#about">What is WebEdu</a>
            <a href="#how">How It Works</a>
            <a href="#features">Features</a>
            <a href="#cta">Start</a>

            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? "☀" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold"
        >
          WebEdu
        </motion.h1>

        <p className="mt-6 text-xl md:text-2xl max-w-3xl text-white/90">
          [ Elevate your learning experience with interactive webinars,
          analytics ] dashboards, and structured resources."
        </p>

        <div className="mt-10 flex gap-6">
          <Link
            to="/login"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:scale-105 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:scale-105 transition"
          >
            Register
          </Link>
        </div>
      </section>

      {/* ===== WHAT IS WEBEDU ===== */}
      <section
        id="about"
        className="py-24 px-10 text-center bg-white dark:bg-slate-900"
      >
        <div className="max-w-4xl mx-auto border-2 border-blue-500 rounded-3xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-8">What is WebEdu?</h2>
          <p className="text-lg leading-relaxed italic">
            “WebEdu is a modern online learning platform designed to make webinars simple, interactive, and impactful. It allows educators to host live sessions, share resources, and track participant progress — all in one place. Whether it’s a training program, workshop, or academic lecture, 
            WebEdu helps deliver structured and engaging learning experiences with ease.”
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className="py-24 px-10 text-center bg-gray-100 dark:bg-slate-800">
        <h2 className="text-4xl font-bold mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { number: "1", title: "Register", desc: "Create your account in seconds." },
            { number: "2", title: "Join Webinar", desc: "Enroll and attend live sessions." },
            { number: "3", title: "Track Progress", desc: "Monitor your learning journey." },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-12 relative"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-md flex items-center justify-center font-bold shadow">
                {item.number}
              </div>

              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PREMIUM FEATURES ===== */}
      <section id="features" className="py-24 px-10 text-center bg-white dark:bg-slate-900">
        <h2 className="text-4xl font-bold mb-4">Premium Features</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Everything you need to run modern webinars.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: "🎥", title: "Live Sessions", desc: "Conduct real-time webinars with interaction tools." },
            { icon: "📊", title: "Analytics Dashboard", desc: "Track performance and engagement metrics easily." },
            { icon: "📚", title: "Resource Management", desc: "Upload and manage webinar materials efficiently." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-md p-12"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔁 SCROLLING TEXT */}
      <div className="overflow-hidden whitespace-nowrap py-6 bg-black text-white text-lg font-semibold">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          " WebEdu — Empowering Education Through Technology — Interactive Webinars — Real-time Analytics — Modern Learning Platform "
        </motion.div>
      </div>

      {/* ===== CTA ===== */}
      <section
        id="cta"
        className="py-20 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600"
      >
        <h2 className="text-4xl font-bold mb-8">
          "Start Your Learning Journey Today"
        </h2>

        <Link
          to="/register"
          className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow hover:scale-105 transition"
        >
          Get Started
        </Link>
      </section>


      {/* ===== FOOTER ===== */}
      <footer className="py-12 bg-black text-gray-400 text-center">
        © 2026 WebEdu. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
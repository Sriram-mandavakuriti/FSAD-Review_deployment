import logo from "../assets/logo.png";
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

      {/* ===== Animated Gradient Background ===== */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-500 
        dark:from-slate-900 dark:via-black dark:to-slate-950 bg-[length:300%_300%]"
      />

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="WebEdu Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold text-black dark:text-white">
              WebEdu
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex gap-8 items-center text-sm font-medium">
            {["Home", "What is WebEdu", "How It Works", "Features", "Start"].map((item, index) => (
              <a
                key={index}
                href={`#${["hero", "about", "how", "features", "cta"][index]}`}
                className="relative group cursor-pointer"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}

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
          Elevate your learning experience with interactive webinars,
          powerful analytics dashboards, and structured resources.
        </p>

        <div className="mt-10 flex gap-6">
          <Link
            to="/register"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition"
          >
            Login
          </Link>
        </div>

        <p className="mt-6 text-sm text-white/80">
          Trusted by 1000+ students • Secure platform • Certificate provided
        </p>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-8 px-6">
          {[
            { number: "10K+", label: "Students" },
            { number: "500+", label: "Webinars" },
            { number: "50+", label: "Expert Speakers" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-blue-600">{item.number}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHAT IS WEBEDU ===== */}
      <section
        id="about"
        className="py-24 px-6 text-center bg-gray-50 dark:bg-slate-800"
      >
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-8">What is WebEdu?</h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            WebEdu is a modern online learning platform designed to make webinars
            simple, interactive, and impactful. It enables educators to host live
            sessions, share resources, and track participant progress — all in one place.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className="py-24 px-6 text-center bg-white dark:bg-slate-900">
        <h2 className="text-4xl font-bold mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { number: "1", title: "Register", desc: "Create your account in seconds." },
            { number: "2", title: "Join Webinar", desc: "Enroll and attend live sessions." },
            { number: "3", title: "Track Progress", desc: "Monitor your learning journey." },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-md p-12 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 text-2xl font-bold mb-4">
                Step {item.number}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-24 px-6 text-center bg-gray-50 dark:bg-slate-800">
        <h2 className="text-4xl font-bold mb-4">Premium Features</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Everything you need to run modern webinars.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Live Sessions", desc: "Conduct real-time webinars with interactive tools." },
            { title: "Analytics Dashboard", desc: "Track engagement and performance metrics easily." },
            { title: "Resource Management", desc: "Upload and manage webinar materials efficiently." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-12 hover:shadow-xl transition-all duration-300"
            >
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
        <motion.div animate={{ x: ["100%", "-100%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="inline-block" > " WebEdu — Empowering Education Through Technology — Interactive Webinars — Real-time Analytics — Modern Learning Platform "
           </motion.div> 
           </div>

      {/* ===== CTA ===== */}
      <section
        id="cta"
        className="py-20 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600"
      >
        <h2 className="text-4xl font-bold mb-4">
          Start Your Learning Journey Today
        </h2>
        <p className="mb-8 text-white/90">
          Join thousands of learners upgrading their skills.
        </p>

        <Link
          to="/register"
          className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
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
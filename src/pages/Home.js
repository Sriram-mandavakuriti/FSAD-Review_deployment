import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 overflow-x-hidden">

      {/* 🌙 Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-700"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* 🌈 Floating Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -150, 150, 0], y: [0, 100, -100, 0] }}
          transition={{ repeat: Infinity, duration: 25 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, 120, -120, 0], y: [0, 80, -80, 0] }}
          transition={{ repeat: Infinity, duration: 30 }}
          className="absolute top-1/3 right-1/4 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl"
        />
      </div>

      {/* 🚀 HERO SECTION (Full Screen) */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 border-b border-gray-200 dark:border-gray-800">

        {/* Big Branding */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          WebEdu
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 text-3xl md:text-4xl font-semibold"
        >
          Elevate Your Learning Experience
        </motion.h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-2xl">
          WebEdu empowers educators and learners with interactive webinars,
          analytics dashboards, and structured resource management.
        </p>

        <div className="mt-10 flex gap-6">
          <Link
            to="/login"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:scale-110 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:scale-110 transition"
          >
            Register
          </Link>
        </div>

      </section>

      {/* 💎 FEATURES */}
      <section className="py-24 px-10 text-center border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-4xl font-bold mb-4">Premium Features</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-16">
          Everything you need to run modern webinars.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            { icon: "🎥", title: "Live Sessions", desc: "Conduct real-time webinars with interaction tools." },
            { icon: "📊", title: "Analytics Dashboard", desc: "Track performance and engagement metrics easily." },
            { icon: "📚", title: "Resource Management", desc: "Upload and manage webinar materials efficiently." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 transition"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🛠 HOW IT WORKS */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 text-center border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-4xl font-bold mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10 px-10">

          {[
            { step: "1️⃣", title: "Register", desc: "Create your account in seconds." },
            { step: "2️⃣", title: "Join Webinar", desc: "Enroll and attend live sessions." },
            { step: "3️⃣", title: "Track Progress", desc: "Monitor your learning journey." }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-white dark:bg-black rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center border-b border-gray-300 dark:border-gray-700">
        <h2 className="text-4xl font-bold mb-6">
          Start Your Learning Journey Today 🚀
        </h2>
        <Link
          to="/register"
          className="px-10 py-4 bg-white text-black rounded-xl font-bold hover:scale-110 transition shadow-lg"
        >
          Get Started
        </Link>
      </section>

      {/* 🏁 FOOTER */}
      <footer className="py-10 bg-gray-900 text-gray-400 text-center">
        <p>© 2026 WebEdu. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Empowering education through technology.
        </p>
      </footer>

    </div>
  );
};

export default Home;
import logo from "../assets/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  /* Scroll Reveal Background */
  const { scrollYProgress } = useScroll();
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1.2, 1]);

  return (
    <div className="relative min-h-screen font-sans text-gray-900 dark:text-gray-200 overflow-x-hidden">

      {/* ===== BASE ANIMATED GRADIENT ===== */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 -z-50 bg-gradient-to-br 
        from-[#0f172a] via-[#1e3a8a] to-[#2563eb] 
        bg-[length:300%_300%]"
      />

      {/* ===== SCROLL IMAGE REVEAL ===== */}
      <motion.div
        style={{ opacity: imageOpacity, scale: imageScale }}
        className="fixed inset-0 -z-40 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')]
        bg-cover bg-center"
      />

      <div className="fixed inset-0 -z-30 bg-black/40" />

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img src={logo} alt="WebEdu Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-black dark:text-white">
              WebEdu
            </span>
          </div>

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

            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </Link>

            <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
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

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-center text-white"
      >
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 
        rounded-3xl px-12 py-16 shadow-2xl max-w-4xl">

          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 
          bg-gradient-to-r from-blue-300 via-white to-cyan-300 
          bg-clip-text text-transparent">
            WebEdu
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Elevate your learning experience with interactive webinars,
            powerful analytics dashboards, and structured resources.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:scale-110 transition"
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
        </div>
      </section>

      {/* ================= STATS ================= */}
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
              <p className="mt-2 text-gray-600 dark:text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT IS WEBEDU ================= */}
      <section id="about" className="py-24 px-6 text-center bg-gray-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-8">What is WebEdu?</h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            WebEdu is a modern online learning platform designed to make webinars simple,
            interactive, and impactful. It enables educators to host live sessions,
            share resources, and track participant progress — all in one place.
          </p>
        </div>
      </section>

      {/* ================= SCROLLING TEXT ================= */}
      <div className="overflow-hidden whitespace-nowrap py-6 bg-black text-white text-lg font-semibold">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          WebEdu — Empowering Education Through Technology — Interactive Webinars — Real-time Analytics — Modern Learning Platform —
        </motion.div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="py-24 px-6 text-center bg-white dark:bg-slate-900">
        <h2 className="text-4xl font-bold mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
  { number: "01", title: "Register", desc: "Create your account in seconds." },
  { number: "02", title: "Join Webinar", desc: "Enroll and attend live sessions." },
  { number: "03", title: "Track Progress", desc: "Monitor your learning journey." },
].map((item, index) => (
  <motion.div
    key={index}
    whileHover={{ y: -12, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="relative rounded-2xl p-12 overflow-hidden group transition-all duration-300

    /* Light Mode */
    bg-white shadow-xl border border-gray-200 text-gray-800

    /* Dark Mode */
    dark:backdrop-blur-xl dark:bg-white/10 
    dark:border-white/20 dark:text-white
    dark:shadow-2xl"
  >

    {/* Step Badge */}
    <div className="
      w-14 h-14 mx-auto mb-6 flex items-center justify-center
      rounded-xl font-bold tracking-widest shadow-md transition

      /* Light */
      bg-blue-600 text-white

      /* Dark */
      dark:bg-white/20 dark:border dark:border-white/30
      dark:text-white
      group-hover:scale-110
    ">
      {item.number}
    </div>

    <h3 className="text-xl font-bold">
      {item.title}
    </h3>

    <p className="mt-4 text-gray-600 dark:text-gray-300">
      {item.desc}
    </p>

    {/* Glowing Gradient Border */}
    <div className="absolute inset-0 rounded-2xl border border-transparent 
    bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-cyan-500/30 
    opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

    {/* Accent Line */}
    <div className="
      absolute bottom-0 left-0 w-0 h-1
      bg-gradient-to-r from-blue-500 to-cyan-400
      group-hover:w-full transition-all duration-500
    " />

  </motion.div>
))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
<section
  id="features"
  className="relative py-24 px-6 text-center overflow-hidden text-white"
>

  {/* Background Image */}
  <div
    className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1526378728789-0cfdf5d01371?auto=format&fit=crop&w=1400&q=80')]
    bg-cover bg-center"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 -z-10 bg-black/70" />

  <h2 className="text-4xl font-bold mb-4">Premium Features</h2>
  <p className="text-gray-300 mb-16">
    Everything you need to run modern webinars.
  </p>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {[
  { 
    icon: "🎥", 
    title: "Live Sessions", 
    desc: "Conduct real-time webinars with interactive tools." 
  },
  { 
    icon: "📊", 
    title: "Analytics Dashboard", 
    desc: "Track engagement and performance metrics easily." 
  },
  { 
    icon: "📚", 
    title: "Resource Management", 
    desc: "Upload and manage webinar materials efficiently." 
  },
].map((feature, index) => (
  <motion.div
    key={index}
    whileHover={{ y: -15, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="relative backdrop-blur-xl bg-white/10 border border-white/20 
    rounded-2xl shadow-xl p-12 overflow-hidden group"
  >

    {/* Glowing Gradient Border */}
    <div className="absolute inset-0 rounded-2xl border border-transparent 
    bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-cyan-500/30 
    opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

    {/* Premium Icon Button */}
    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
    rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30
    shadow-lg text-2xl group-hover:scale-110 transition">
      {feature.icon}
    </div>

    <h3 className="text-xl font-bold text-white">
      {feature.title}
    </h3>

    <p className="mt-4 text-gray-300">
      {feature.desc}
    </p>

    {/* Bottom Glow Line */}
    <div className="absolute bottom-0 left-0 w-0 h-1 
    bg-gradient-to-r from-blue-400 to-cyan-400 
    group-hover:w-full transition-all duration-500" />

  </motion.div>
))}

  </div>
</section>

      {/* ================= CTA ================= */}
      <section id="cta" className="py-20 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600">
        <h2 className="text-4xl font-bold mb-4">Start Your Learning Journey Today</h2>
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

      {/* ================= FOOTER ================= */}
      <footer className="py-12 bg-black text-gray-400 text-center">
        © 2026 WebEdu. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;
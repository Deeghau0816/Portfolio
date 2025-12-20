import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Components/Projectcard";
import PageBackground from "../Components/Pagebackground";

const projects = [
  {
    title: "SafeZone",
    subtitle: "Disaster Management System",
    period: "2025",
    description:
      "District-based alerts, user registration, admin dashboards, and reporting for disaster notifications.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/safezone",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },
  {
    title: "StockFlux",
    subtitle: "Real-time Stock Prediction Dashboard",
    period: "2025",
    description:
      "Streamlit dashboard with real-time fetching and ML-based next-candle prediction with intervals.",
    tags: ["Python", "Streamlit", "yfinance", "ML"],
    githubUrl: "https://github.com/Deeghau0816/StockFlux",
    isUni: false,
  },
  {
    title: "WellTrack",
    subtitle: "Wellness Tracker App",
    period: "2024",
    description:
      "Android wellness tracker focusing on storing user wellness data with offline-first local storage.",
    tags: ["Kotlin", "Data Persistence", "Local Database", "Mobile App"],
    githubUrl: "https://github.com/yourusername/welltrack",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },
  {
    title: "TravelMania",
    subtitle: "Sri Lanka Tourism App",
    period: "2025",
    description:
      "Tourism mobile app with listings and features designed for Sri Lanka travel planning.",
    tags: ["Kotlin", "Android Studio", "Mobile App"],
    githubUrl: "https://github.com/yourusername/travelmania",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },
  {
    title: "TravelMania",
    subtitle: "Web Application",
    period: "2025",
    description:
      "Full-stack web platform for exploring Sri Lankan tourism with dynamic content and booking features.",
    tags: ["Java Servlets", "JSP", "MySQL", "HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/yourusername/travelmania-web",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },
  {
    title: "Online Pharmacy System",
    subtitle: "E-commerce Web App",
    period: "2024",
    description:
      "Online pharmacy system with product management, order processing, and secure checkout flow.",
    tags: ["PHP", "MySQL", "Bootstrap", "jQuery", "HTML/CSS"],
    githubUrl: "https://github.com/yourusername/online-pharmacy",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },
];

export default function Projects() {
  const [count, setCount] = useState(0);

  // 🔢 Counter animation (0 → total)
  useEffect(() => {
    const total = projects.length;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= total) clearInterval(timer);
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* background behind */}
      <div className="absolute inset-0 -z-10">
        <PageBackground />
      </div>

      {/* ✅ scroll target (drops below header) */}
      <div id="projects" className="scroll-mt-36" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-left">
          <p className="text-sm font-semibold tracking-wider text-slate-500">
            PROJECTS • SELECTED WORK
          </p>

          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-slate-900">
            My <span className="text-violet-700">Projects</span> showcase
          </h2>

          {/* ✅ nice highlighted count (same row, clean) */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-slate-600">Total projects in portfolio</span>

            <motion.span
              className="
                inline-flex items-center justify-center
                rounded-full px-4 py-1.5
                text-sm font-extrabold text-red-600
                bg-white/60
                backdrop-blur
                border border-red-200
                shadow-[0_8px_25px_rgba(239,68,68,0.15)]
                              "
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true }}
              animate={{ scale: [1, 1.06, 1] }}
            >
              {count}
            </motion.span>
          </div>

          {/* ✅ keep description small like Education (optional, clean) */}
          <p className="mt-3 max-w-3xl text-base sm:text-lg text-slate-600">
            A curated set of academic and personal builds & focused on
            real features, and practical outcomes.
          </p>
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={`${p.title}-${p.subtitle}`} project={p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

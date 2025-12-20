// src/pages/Education.jsx
import { motion } from "framer-motion";
import PageBackground from "../Components/Pagebackground";
import {
  GraduationCap,
  School,
  BookOpen,
  CalendarDays,
  MapPin,
  Layers3,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen scroll-mt-28 pt-24 pb-16 overflow-hidden"
    >
      <PageBackground />

      <div className="relative mx-auto w-full max-w-7xl px-5">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium tracking-wide text-slate-700">
            EDUCATION • ACADEMIC JOURNEY
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            My <span className="text-violet-700">Education</span> timeline
          </h1>

          <p className="mt-4 max-w-4xl text-slate-700 leading-relaxed">
            One by one, here’s my academic background where I studied, what I
            completed, and what I’m currently doing.
          </p>
        </motion.div>

        {/* Stacked cards */}
        <div className="space-y-6">
          {/* SLIIT */}
          <EduWideCard
            delay={0}
            badgeMain="Current"
            badgeSide="University"
            icon={<GraduationCap className="h-5 w-5 text-slate-800" />}
            title="Sri Lanka Institute of Information Technology (SLIIT)"
            subtitle="Undergraduate — Currently studying"
            batchTitle="2023 Oct"
            batchValue="Present"
            location="Sri Lanka"
            logoSrc="/sliit-badge.png"
            points={[
              "Focused on Data Science learning path",
              "Building skills through coursework + projects",
              "Improving step-by-step with real practice",
            ]}
            tags={["Data Science", "Projects", "Learning"]}
          />

          {/* Aquinas */}
          <EduWideCard
            delay={0.05}
            badgeMain="Completed"
            badgeSide="Diploma"
            icon={<BookOpen className="h-5 w-5 text-slate-800" />}
            title="Aquinas College of Higher Studies, Colombo"
            subtitle="Diploma in English & Literature"
            batchTitle="2023 Mar - 2025 Jan"
            batchValue="Completed"
            location="Colombo"
            logoSrc="/AqcLogo.png"
            points={[
              "Improved communication and writing skills",
              "Built confidence in clear presentations",
              "Stronger professional English foundation",
            ]}
            tags={["English", "Communication", "Presentation", "Writing", "Literature"]}
          />

          {/* A/L */}
          <EduWideCard
            delay={0.1}
            badgeMain="A/L"
            badgeSide="Physical Stream"
            icon={<School className="h-5 w-5 text-slate-800" />}
            title="De Mazenod College, Kandana"
            subtitle="G.C.E. Advanced Level — Physical Science Stream"
            batchTitle="A/L Year"
            batchValue="2022 (Jan 2023)"
            location="Kandana"
            logoSrc="/dmcLogo.png"
            points={["Combined Mathematics", "Physics", "Chemistry"]}
            tags={["Combined Maths", "Physics", "Chemistry"]}
          />
        </div>
      </div>
    </section>
  );
}

/* -------- Education Card -------- */

function EduWideCard({
  delay = 0,
  badgeMain,
  badgeSide,
  icon,
  title,
  subtitle,
  batchTitle,
  batchValue,
  location,
  points = [],
  tags = [],
  logoSrc,
}) {
  const mainBadgeClass =
    badgeMain === "Current"
      ? "bg-red-600 text-white"
      : badgeMain === "Completed"
      ? "bg-emerald-600 text-white"
      : "bg-amber-300 text-slate-900"; // A/L

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="
        group relative overflow-hidden rounded-3xl border border-slate-200
        bg-white/70 backdrop-blur-md shadow-sm
        transition-all duration-300
        hover:border-slate-300/60 hover:shadow-[0_18px_55px_rgba(15,23,42,0.12)]
      "
    >
      <div className="relative p-6 md:p-8">
        {/* badges + location */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${mainBadgeClass}`}
            >
              {badgeMain}
            </span>

            <span className="inline-flex rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-800">
              {badgeSide}
            </span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-800">
            <MapPin className="h-4 w-4 text-slate-600" />
            {location}
          </span>
        </div>

        {/* content grid */}
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-3">
              {/* logo with proper fallback */}
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="absolute inset-0 grid place-items-center">
                  {icon}
                </div>

                <img
                  src={logoSrc}
                  alt={`${title} logo`}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-slate-700">{subtitle}</p>
              </div>
            </div>

            {/* points */}
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {points.map((p, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/70" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            {/* tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white/65 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold tracking-wide text-slate-700">
                {batchTitle}
              </p>

              <div className="mt-2 flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-slate-700" />
                <p className="text-sm font-semibold text-slate-900">
                  {batchValue}
                </p>
              </div>

              {badgeMain === "A/L" && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Layers3 className="h-4 w-4 text-slate-700" />
                    Stream Subjects
                  </div>
                  <p className="mt-1 text-sm text-slate-800">
                    Combined Maths • Physics • Chemistry
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

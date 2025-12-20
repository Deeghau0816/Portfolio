// src/pages/About.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Brain,
  BarChart3,
  LineChart,
  Database,
  Code2,
  Sparkles,
  MapPin,
  Mail,
  Layers3,
  ClipboardCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* =========================
          Background Video + overlays
          Put the file in: public/videos/BackgroundVideo.mp4
          ========================= */}
      <div className="pointer-events-none absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/videos/BackgroundVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-slate-200/20" />
      </div>

      {/* soft background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5">
        {/* ===== Top header ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium tracking-wide text-slate-700">
            ABOUT • DATA SCIENCE PATH
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            My <span className="text-indigo-700">Data Science</span> journey —
            learning, building, and improving with{" "}
            <span className="text-cyan-700">real data</span>.
          </h1>

          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            I’m an IT Undergraduate focused on{" "}
            <span className="font-medium text-slate-900">Data Science</span>.
            Right now I’m strengthening my foundations through coursework and
            hands on projects especially in{" "}
            <span className="font-medium text-slate-900">EDA</span>,{" "}
            <span className="font-medium text-slate-900">visualization</span>,{" "}
            <span className="font-medium text-slate-900">basic modeling</span>,
            and{" "}
            <span className="font-medium text-slate-900">dashboarding</span>.
            <br />
            I’m also learning{" "}
            <span className="font-medium text-slate-900">
              Data Engineering basics
            </span>{" "}
            (how to structure, collect, and manage data properly)
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              <MapPin className="h-4 w-4 text-slate-600" />
              Sri Lanka
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              <Mail className="h-4 w-4 text-slate-600" />
              Open to internships
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              <Sparkles className="h-4 w-4 text-slate-600" />
              DS-first • Practical projects
            </span>
          </div>

          {/* Role chips (honest) */}
          <div className="mt-5 flex flex-wrap gap-2">
            <RoleChip
              tone="strong"
              icon={<BarChart3 className="h-4 w-4" />}
              text="Data Analyst (Intern)"
            />
            <RoleChip
              tone="strong"
              icon={<LineChart className="h-4 w-4" />}
              text="BI / Dashboarding"
            />
            <RoleChip
              tone="strong"
              icon={<Brain className="h-4 w-4" />}
              text="Junior Data Science (Intern)"
            />
            <RoleChip
              tone="learning"
              icon={<Database className="h-4 w-4" />}
              text="Data Engineering (Learning)"
            />
          </div>
        </motion.div>

        {/* ===== Main grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left big card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                My Data Science focus
              </h2>

              <p className="mt-3 text-slate-700 leading-relaxed">
                I like working on problems where data tells a story. My goal is
                to build skills that make me useful in a real team not just
                theory: clean analysis, clear insights, and practical outputs
                like dashboards or small ML features.
              </p>

              {/* DS workflow cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MiniCard
                  icon={<Layers3 className="h-5 w-5 text-indigo-700" />}
                  title="EDA + Visualization"
                  desc="Cleaning, patterns, charts, and clear summaries."
                />
                <MiniCard
                  icon={<LineChart className="h-5 w-5 text-cyan-700" />}
                  title="Insights + Reporting"
                  desc="Dashboards, KPIs, trends, and storytelling."
                />
                <MiniCard
                  icon={<Brain className="h-5 w-5 text-fuchsia-700" />}
                  title="ML Basics (Growing)"
                  desc="Baselines, simple models, evaluation, iteration."
                />
                <MiniCard
                  icon={<Code2 className="h-5 w-5 text-amber-700" />}
                  title="Build & Ship"
                  desc="Turning results into usable apps/pages."
                />
              </div>

              {/* Roles section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">
                  Roles I’m targeting (and building towards)
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Here’s what I can contribute confidently right now and what
                  I’m actively studying.
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ReadyCard
                    badge="Strong fit now"
                    title="Data Analyst (Intern)"
                    icon={<BarChart3 className="h-4 w-4 text-indigo-700" />}
                    points={[
                      "Data cleaning + EDA with clear conclusions",
                      "Dashboards / reporting mindset (KPIs, trends)",
                      "Presenting insights in a simple, readable way",
                    ]}
                  />
                  <ReadyCard
                    badge="Strong fit now"
                    title="BI / Dashboarding"
                    icon={<LineChart className="h-4 w-4 text-cyan-700" />}
                    points={[
                      "Visual storytelling and consistent layouts",
                      "Charts that highlight key decisions",
                      "Turning messy data into a clean view",
                    ]}
                  />
                  <ReadyCard
                    badge="Growing"
                    title="Junior Data Science (Intern)"
                    icon={<Brain className="h-4 w-4 text-fuchsia-700" />}
                    points={[
                      "Learning ML workflows and improving evaluation",
                      "Building DS projects step-by-step (not shortcuts)",
                      "Comfortable with experimentation + iteration",
                    ]}
                  />
                  <ReadyCard
                    badge="Learning"
                    title="Data Engineering (Basics)"
                    icon={<Database className="h-4 w-4 text-amber-700" />}
                    points={[
                      "Working with APIs → datasets and structured storage",
                      "Learning pipeline thinking (reliable, repeatable steps)",
                      "Improving SQL + data organization practices",
                    ]}
                  />
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">
                  What I’m doing now
                </h3>

                <ul className="mt-4 space-y-3">
                  <TimelineItem
                    title="Deepening Data Science foundations"
                    desc="EDA depth, stats basics, better evaluation and practice."
                  />
                  <TimelineItem
                    title="Building projects that show real skills"
                    desc="Dashboards, analysis write-ups, and small ML experiments."
                  />
                  <TimelineItem
                    title="Improving career readiness"
                    desc="CV, GitHub, portfolio polishing, interview practice."
                  />
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right column cards */}
          <div className="space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-slate-700" />
                  Education
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  BSc (Hons) in Information Technology Specilizing in Data Science at SLIIT.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>Python</Pill>
                  <Pill>EDA</Pill>
                  <Pill>ML Basics</Pill>
                  <Pill>SQL (Improving)</Pill>
                  <Pill>Dashboards</Pill>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5 text-slate-700" />
                  Skills (honest snapshot)
                </h3>

                <div className="mt-4 space-y-3">
                  <SkillBar label="EDA + Visualization" value={82} />
                  <SkillBar label="Dashboards / Reporting" value={74} />
                  <SkillBar label="Python + Data Handling" value={78} />
                  <SkillBar label="ML Basics (Growing)" value={66} />
                  <SkillBar
                    label="Data Engineering Basics (Learning)"
                    value={58}
                  />
                </div>

                <p className="mt-4 text-sm text-slate-700">
                  Data Science is my main path. I’m improving every week through
                  projects.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  My advantage
                </h3>

                <ul className="mt-4 space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    I can explain insights clearly (not just graphs)
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600" />
                    I like clean UI dashboards that feel professional
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-600" />
                    Strong motivation to learn and iterate fast
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===== Bottom CTA (ONLY Contact button) ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
        >
          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Open to Data role internships
              </h3>
              <p className="mt-2 text-slate-700">
                I’m mainly targeting{" "}
                <span className="font-medium text-slate-900">
                  Data Analyst / BI
                </span>{" "}
                internships, and I’m also building towards{" "}
                <span className="font-medium text-slate-900">
                  Junior Data Science
                </span>{" "}
                roles while learning{" "}
                <span className="font-medium text-slate-900">
                  Data Engineering fundamentals
                </span>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="
                  btnLift
                  flex items-center gap-3
                  rounded-2xl px-20 py-3.5
                  bg-white/70 text-indigo-700 font-semibold
                  border border-indigo-500/25
                  shadow-[0_12px_28px_rgba(15,23,42,0.08)]
                  transition-all duration-300
                  hover:bg-indigo-50/50 hover:border-indigo-500/30
                  active:scale-[0.98]
                "
              >
                <Mail size={18} className="text-indigo-700" />
                Contact_Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/65 p-4 backdrop-blur-md">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-sm text-slate-700 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ReadyCard({ badge, title, points, icon }) {
  const badgeStyle =
    badge === "Strong fit now"
      ? "bg-slate-900 text-white"
      : badge === "Growing"
      ? "bg-indigo-700 text-white"
      : "bg-slate-700 text-white";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/65 p-4 backdrop-blur-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900 flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-1.5">
              {icon}
            </span>
            {title}
          </p>
          <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${badgeStyle}`}>
            {badge}
          </span>
        </div>
      </div>

      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {points.map((p, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900/70" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({ title, desc }) {
  return (
    <li className="rounded-2xl border border-slate-200 bg-white/65 p-4 backdrop-blur-md">
      <p className="font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-700 leading-relaxed">{desc}</p>
    </li>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-800">
      {children}
    </span>
  );
}

function RoleChip({ icon, text, tone = "strong" }) {
  const cls =
    tone === "learning"
      ? "border-slate-200 bg-white/70 text-slate-700"
      : "border-slate-200 bg-white/80 text-slate-800";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}>
      <span className="text-slate-700">{icon}</span>
      {text}
    </span>
  );
}

function SkillBar({ label, value }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-800">{label}</span>
        <span className="text-slate-500">{value}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full bg-slate-900/80"
        />
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import PageBackground from "../Components/Pagebackground";
import {
  ClipboardCheck,
  Code2,
  Database,
  LineChart,
  Brain,
  Sparkles,
  CheckCircle2,
  Wrench,
  Users,
  MessageSquare,
  Target,
  CalendarCheck,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen scroll-mt-28 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <PageBackground />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium tracking-wide text-slate-700">
            SKILLS • HONEST SNAPSHOT
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Skills I am using for my{" "}
            <span className="text-indigo-700">Data Science</span> career
          </h1>

          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            This is an honest view of what I can do now and what I’m currently
            improving.
          </p>
        </motion.div>

        {/* =========================
            1) CORE SKILLS (MAIN)
           ========================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Core skills (left / big) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-slate-700" />
                Core Skills
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SkillGroup
                  icon={<LineChart className="h-5 w-5 text-cyan-700" />}
                  title="EDA + Visualization"
                  items={[
                    "Pandas",
                    "NumPy",
                    "Matplotlib/Plotly",
                    "Insights + story",
                  ]}
                />
                <SkillGroup
                  icon={<Code2 className="h-5 w-5 text-indigo-700" />}
                  title="Python + Projects"
                  items={["Clean code habits", "APIs to datasets", "Notebook → app"]}
                />
                <SkillGroup
                  icon={<Brain className="h-5 w-5 text-fuchsia-700" />}
                  title="ML Basics (Growing)"
                  items={["Baselines", "Train/test thinking", "Evaluation practice"]}
                />
                <SkillGroup
                  icon={<Database className="h-5 w-5 text-amber-700" />}
                  title="Data Engineering (Learning)"
                  items={["SQL improving", "Pipelines mindset", "Structured storage"]}
                />
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white/65 p-5 backdrop-blur-md">
                <p className="font-semibold text-slate-900 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-slate-700" />
                  Note
                </p>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Data Science is my main path. I’m building skills through real
                  projects and improving week by week.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skill levels (right / like before) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
          >
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Skill levels (self-estimate)
              </h3>

              <div className="mt-4 space-y-3">
                <SkillBar label="EDA + Visualization" value={82} />
                <SkillBar label="Dashboards / Reporting" value={74} />
                <SkillBar label="Python + Data Handling" value={78} />
                <SkillBar label="ML Basics (Growing)" value={66} />
                <SkillBar label="Data Engineering (Learning)" value={58} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================
            2) TOOLS (MAIN)
           ========================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
        >
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-slate-700" />
              Tools I use
            </h2>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Databases, IDEs, analytics tools, and platforms I work with.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Databases */}
              <div className="rounded-2xl border border-slate-200 bg-white/65 p-5 backdrop-blur-md">
                <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <Database className="h-4 w-4 text-amber-700" />
                  Databases
                </p>
                <ul className="mt-3 space-y-2">
                  <ListItem>MySQL</ListItem>
                  <ListItem>Microsoft SQL Server</ListItem>
                  <ListItem>MongoDB</ListItem>
                  <ListItem>PostgreSQL</ListItem>
                </ul>
              </div>

              {/* Tools & Platforms */}
              <div className="rounded-2xl border border-slate-200 bg-white/65 p-5 backdrop-blur-md">
                <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-indigo-700" />
                  Tools & Platforms
                </p>
                <ul className="mt-3 space-y-2">
                  <ListItem>VS Code</ListItem>
                  <ListItem>Jupyter Notebook</ListItem>
                  <ListItem>Tableau</ListItem>
                  <ListItem>Power BI</ListItem>
                  <ListItem>Eclipse IDE</ListItem>
                  <ListItem>IntelliJ IDEA</ListItem>
                  <ListItem>Postman</ListItem>
                  <ListItem>Git</ListItem>
                  <ListItem>GitHub</ListItem>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================
            3) SOFT SKILLS (MAIN)
           ========================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
        >
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Soft skills</h2>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              How I work with people, deadlines, and real projects.
            </p>

            <div className="mt-5 space-y-4">
              <SoftSkillLine
                icon={<Users className="h-4 w-4 text-indigo-700" />}
                title="Team collaboration"
                desc="Support teammates, share progress, and stay aligned."
              />
              <SoftSkillLine
                icon={<MessageSquare className="h-4 w-4 text-cyan-700" />}
                title="Clear communication"
                desc="Explain work simply, ask the right questions, and update often."
              />
              <SoftSkillLine
                icon={<Target className="h-4 w-4 text-fuchsia-700" />}
                title="Problem solving"
                desc="Break tasks down, test quickly, and iterate to a solution."
              />
              <SoftSkillLine
                icon={<CalendarCheck className="h-4 w-4 text-amber-700" />}
                title="Time management"
                desc="Prioritize the important parts and deliver on deadlines."
              />
              <SoftSkillLine
                icon={<Lightbulb className="h-4 w-4 text-emerald-700" />}
                title="Fast learning mindset"
                desc="Learn by building, reading docs, and practicing weekly."
              />
              <SoftSkillLine
                icon={<ShieldCheck className="h-4 w-4 text-slate-700" />}
                title="Ownership & reliability"
                desc="Take responsibility and finish what I start."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillGroup({ icon, title, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/65 p-4 backdrop-blur-md">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-900">{title}</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            {items.map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900/60" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ListItem({ children }) {
  return (
    <li className="flex items-center gap-2 text-sm text-slate-700">
      <CheckCircle2 className="h-4 w-4 text-slate-700" />
      <span>{children}</span>
    </li>
  );
}

function SoftSkillLine({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/65 p-4 backdrop-blur-md">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
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

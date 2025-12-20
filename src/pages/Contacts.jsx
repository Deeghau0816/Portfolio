import { Mail, Github, Linkedin, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import PageBackground from "../Components/Pagebackground";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen scroll-mt-28 pt-24 pb-16 overflow-hidden"
    >
      <PageBackground />

      <div className="relative mx-auto w-full max-w-7xl px-5">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold tracking-widest text-slate-600">
            CONTACT • LET’S CONNECT
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Get in <span className="text-purple-600">Touch</span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Open to Data Science internships and meaningful collaborations.
          </p>
        </motion.div>

        {/* ================= CONTENT (KEEP THIS GRID!) ================= */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 items-start">
          {/* LEFT – Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="
              group relative overflow-hidden rounded-2xl
              bg-white/70 backdrop-blur-md
              shadow-[0_18px_55px_rgba(2,6,23,0.20)]
              ring-1 ring-slate-200/70
            "
          >
            {/* soft glow blobs */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative">
              <img
                src="/contactPhoto.jpg"
                alt="Deeghau"
                loading="lazy"
                className="
                  w-[96%] mx-auto
                  h-[580px] sm:h-[650px] lg:h-[720px]
                  object-cover object-center
                  scale-[1.02] transition duration-700
                  group-hover:scale-[1.08]
                "
              />

              {/* gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent" />

              {/* subtle vignette ring */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />

              {/* caption badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="
                    flex items-center justify-between gap-3
                    rounded-xl bg-white/70 backdrop-blur-md
                    px-4 py-3
                    ring-1 ring-white/60
                    shadow-[0_12px_30px_rgba(2,6,23,0.20)]
                  "
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Deeghau Vidarshana
                    </p>
                    <p className="text-xs text-slate-600">
                      Data Science • Projects & Internships
                    </p>
                  </div>

                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-600/20">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="
              rounded-2xl bg-white/70 backdrop-blur-md p-8 sm:p-10
              shadow-[0_15px_40px_rgba(0,0,0,0.18)]
              ring-1 ring-black/5
            "
          >
            <p className="text-slate-700 text-lg leading-relaxed">
              Want to build something meaningful together? I’m open to internship
              opportunities, collaborations, and new project ideas!
            </p>

            <div className="mt-6 h-1 w-20 rounded-full bg-indigo-700" />

            <div className="mt-8 space-y-7">
              <Item
                icon={<Mail className="text-slate-700" />}
                label="E-mail"
                value="deeghauv110@gmail.com"
                href="mailto:deeghauv110@gmail.com"
              />

              <Item
                icon={<Linkedin className="text-slate-700" />}
                label="LinkedIn"
                value="Deeghau Vidarshana"
                href="https://www.linkedin.com/in/deeghau-vidarshana-2ab8932a7"
              />

              <Item
                icon={<Github className="text-slate-700" />}
                label="GitHub"
                value="Deeghau0816"
                href="https://github.com/Deeghau0816"
              />
            </div>

            <a
              href="/Deeghau_CV.pdf"
              download
              className="
                mt-10 flex w-full items-center justify-center gap-3
                rounded-xl bg-indigo-700 px-6 py-4
                text-white font-semibold
                shadow-[0_18px_40px_rgba(79,70,229,0.22)]
                hover:bg-indigo-800 transition
              "
            >
              <FileDown />
              Download My CV
            </a>

            <div className="mt-6 rounded-xl bg-white/70 p-6 backdrop-blur-md ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Let’s Connect!</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                If you’re hiring for a Data Science Internship or need help
                building a project, I’d love to chat. Let’s make something
                impactful.
              </p>
              <div className="mt-4 h-1 w-16 rounded-full bg-cyan-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon, label, value, href }) {
  const isHttp = href.startsWith("http");

  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-white/70 backdrop-blur-md ring-1 ring-slate-200">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-slate-900">{label}</p>
        <a
          href={href}
          target={isHttp ? "_blank" : undefined}
          rel={isHttp ? "noreferrer" : undefined}
          className="text-indigo-700 hover:underline"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

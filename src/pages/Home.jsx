import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageBackground from "../Components/Pagebackground";

export default function Home() {
  const navigate = useNavigate();

  const fullText = useMemo(() => "I am Deeghau\nVidarshana", []);
  const [text, setText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= fullText.length) return;
    const t = setTimeout(() => {
      setText(fullText.slice(0, i + 1));
      setI((p) => p + 1);
    }, 70);
    return () => clearTimeout(t);
  }, [i, fullText]);

  const hasBreak = text.includes("\n");
  const [line1 = "", line2 = ""] = text.split("\n");

  return (
    <section
      id="contact"
      className="relative min-h-screen scroll-mt-28 pt-24 pb-16 overflow-hidden"
    >
      {/* same background system */}
      <PageBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05]">
            <span className="block">
              {line1}
              {!hasBreak && <span className="typingCursor" aria-hidden="true" />}
            </span>

            <span className="block mt-2">
              <span className="nameSoftGradient">{line2}</span>
              {hasBreak && <span className="typingCursor" aria-hidden="true" />}
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            <span className="font-semibold text-slate-800">
              Third-year IT Undergraduate
            </span>{" "}
            focused on{" "}
            <span className="dsHighlight font-semibold">Data Science</span>,{" "}
            <span className="mlHighlight font-semibold">Machine Learning</span>,
            and building{" "}
            <span className="sysHighlight font-semibold">
              practical data-driven systems
            </span>
            . I also enjoy crafting clean, user-friendly web experiences when
            needed.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
  {/* ✅ View Projects — soft filled */}
  <button
  onClick={() => navigate("/projects")}
  className="
    btnLift
    group flex items-center gap-3
    rounded-2xl px-8 py-3.5
    bg-emerald-500 text-white font-semibold
    shadow-[0_12px_30px_rgba(16,185,129,0.14)]
    transition-all duration-300
    hover:bg-emerald-600 hover:shadow-[0_16px_36px_rgba(16,185,129,0.18)]
    active:scale-[0.98]
  "
>
  View Projects
  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1 text-white/90"
  />
</button>


  {/* ✅ Contact Me — blue font */}
  <button
    onClick={() => navigate("/contact")}
    className="
      btnLift
      flex items-center gap-3
      rounded-2xl px-8 py-3.5
      bg-white/70 text-indigo-700 font-semibold
      border border-indigo-500/25
      shadow-[0_12px_28px_rgba(15,23,42,0.08)]
      transition-all duration-300
      hover:bg-indigo-50/50 hover:border-indigo-500/30
      active:scale-[0.98]
    "
  >
    <Mail size={18} className="text-indigo-700" />
    Contact Me
  </button>

  {/* ✅ Download CV — red font */}
  <a
    href="/Deeghau_CV.pdf"
    download
    className="
      btnLift
      inline-flex items-center gap-3
      rounded-2xl px-8 py-3.5
      bg-white/70 text-rose-600 font-semibold
      border border-rose-400/30
      shadow-[0_12px_28px_rgba(15,23,42,0.08)]
      transition-all duration-300
      hover:bg-rose-50/50 hover:border-rose-400/35
      active:scale-[0.98]
    "
  >
    <Download size={18} className="text-rose-600" />
    Download CV
  </a>
</div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div
            className="
              w-full
              max-w-[420px] sm:max-w-[520px] lg:max-w-[480px]
              h-[500px] sm:h-[460px] lg:h-[600px]
              overflow-hidden
              rounded-3xl
              shadow-[0_22px_60px_rgba(15,23,42,0.16)]
            "
          >
            <img
              src="/contactPhoto.jpg"
              alt="Deeghau"
              className="w-full h-full object-cover object-[50%_35%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

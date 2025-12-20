import { Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const {
    title,
    subtitle,
    period,
    description,
    tags = [],
    githubUrl,
    isUni,
    badgeImg,
  } = project;

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-3xl border border-slate-200/70
        bg-white/70 backdrop-blur
        shadow-[0_18px_50px_rgba(2,6,23,0.06)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(2,6,23,0.10)]
      "
    >
      {/* soft accent glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-indigo-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl" />

      {/* ✅ TOP-RIGHT: Year + Uni badge together */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
        {/* year */}
        {period ? (
          <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
            {period}
          </span>
        ) : null}

        {/* uni badge */}
        {isUni && badgeImg ? (
          <div className="rounded-2xl bg-white/90 border border-slate-200 shadow-sm p-2">
            <img
              src={badgeImg}
              alt="University badge"
              className="h-7 w-7 object-contain"
              loading="lazy"
            />
          </div>
        ) : null}
      </div>

      <div className="relative p-7">
        {/* top row (REMOVE the year span from here now) */}
        <div className="flex items-start justify-between gap-4">
          <div className="pr-16">
            <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>

            <p className="mt-1 text-sm font-semibold bg-gradient-to-r from-indigo-700 to-sky-700 bg-clip-text text-transparent">
              {subtitle}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="
                rounded-full border border-slate-200/70
                bg-slate-50 px-3 py-1
                text-xs font-semibold text-slate-700
              "
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-2xl border border-slate-300
                bg-white px-4 py-2.5
                text-sm font-semibold text-slate-800
                shadow-sm transition-all duration-300
                hover:bg-slate-50 hover:border-slate-400
              "
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : (
            <span className="text-sm font-semibold text-slate-500">
              Private repo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

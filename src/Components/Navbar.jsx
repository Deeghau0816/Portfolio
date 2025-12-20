import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `
      px-4 py-2 rounded-full text-sm font-medium
      transition-all duration-300

      ${
        isActive
          ? "bg-indigo-100 text-indigo-700 shadow-inner"
          : "text-slate-700 hover:text-indigo-600"
      }

      hover:tracking-wide hover:font-semibold
      hover:[text-shadow:
        0_1px_0_rgb(199_210_254),
        0_2px_0_rgb(165_180_252),
        0_6px_14px_rgba(99,102,241,0.55)
      ]
    `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <nav
          className="
            flex items-center justify-between
            rounded-full
            bg-white/80 backdrop-blur
            px-5 py-3
            border border-white/50
            shadow-[0_12px_35px_rgba(15,23,42,0.12)]
          "
        >
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-slate-100 shadow-md overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </NavLink>

          {/* Links */}
          <div className="flex items-center gap-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/education" className={linkClass}>Education</NavLink>
            <NavLink to="/skills" className={linkClass}>Skills</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

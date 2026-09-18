"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/artistas", label: "Artistas" },
  { href: "/agenda", label: "Agenda" },
  { href: "/galeria", label: "Galería" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-black text-red-600 tracking-wider uppercase">
            Producciones R★
          </span>
          <span className="text-xs text-yellow-400 tracking-widest">
            20 AÑOS • Queda la música...
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-white hover:text-red-500 transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-black flex flex-col items-center gap-4 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-white font-bold uppercase tracking-wide hover:text-red-500"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
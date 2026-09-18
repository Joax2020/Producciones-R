"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const heroSlides = [
  "/images/carrusel1.jpg",
  "/images/carrusel2.jpg",
  "/images/carrusel3.jpg",
  "/images/carrusel4.jpg",
  "/images/carrusel5.jpg",
  "/images/carrusel6.jpg",
];

const menuLinks = [
  { href: "/quienes-somos", label: "Quienes somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/artistas", label: "Artistas" },
  { href: "/agenda", label: "Agenda" },
  { href: "/galeria", label: "Galería" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex items-center" style={{ minHeight: "100vh" }}>
      
      {/* Carrusel de fondos */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${slide}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenedor principal */}
      <div className="relative z-10 flex w-full flex-col items-center justify-between gap-8 py-12 md:flex-row md:py-0" style={{ paddingLeft: "clamp(2rem, 5vw, 6rem)", paddingRight: "clamp(2rem, 5vw, 6rem)" }}>
        
        {/* Columna Izquierda: Menú */}
        <nav className="flex flex-col gap-5 w-full md:w-auto">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-[#cc0000]/30 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-widest px-6 rounded-lg text-center transition-all duration-300 hover:translate-x-2 hover:bg-red-500/70 border-l-4 border-red-900 hover:border-white shadow-lg w-full md:w-52"
style={{ paddingTop: "0.65rem", paddingBottom: "0.65rem" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Columna Derecha: Logo */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img 
            src="/images/logo.png" 
            alt="Producciones R - 20 Años" 
            className="w-full max-w-[480px] drop-shadow-2xl"
          />
        </div>

      </div>
{/* Redes sociales sobre el carrusel */}
<div className="absolute bottom-5 right-6 z-20 flex gap-5">
  {[
    { name: "Facebook", url: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { name: "Instagram", url: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { name: "TikTok", url: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z"/></svg> },
    { name: "YouTube", url: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
  ].map((red) => (
    <a
      key={red.name}
      href={red.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-red-400 transition-all duration-300 hover:scale-125 drop-shadow-lg"
      title={red.name}
    >
      {red.icon}
    </a>
  ))}
</div>
{/* Reproductor Spotify flotante */}
<div className="fixed top-4 right-4 z-50 rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
  <iframe
    src="https://open.spotify.com/embed/playlist/33Dm12hmIjAHgyBmitH1Bj?utm_source=generator"
    width="300"
    height="80"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    style={{ borderRadius: "12px", display: "block" }}
  />
</div>
    </div>
  );
}
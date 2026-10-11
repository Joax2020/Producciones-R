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
  { href: "/quienes-somos", label: "Conócenos" },
  { href: "/servicios", label: "Qué hacemos" },
  { href: "/artistas", label: "Artistas" },
  { href: "/agenda", label: "Agenda" },
  { href: "/contactos", label: "Contáctanos" },
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
      
      {/* ── ETIQUETA "EN CONSTRUCCIÓN" ── */}
      <div className="absolute top-6 left-6 md:top-10 md:left-12 z-50 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#cc0000] animate-pulse shadow-[0_0_8px_#cc0000]"></span>
        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-90">
          Sitio en construcción
        </span>
      </div>
      {/* Carrusel de fondos */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
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
        <nav className="flex flex-col gap-8 w-full md:w-auto">
          {menuLinks.map((link) => (
            <Link
  key={link.href}
  href={link.href}
  className="group relative text-white font-bold text-xs uppercase tracking-widest text-center transition-all duration-500 w-full md:w-52 flex items-center justify-center"
  style={{ height: "60px" }}
>
  {/* Fondo rectangular — visible sin hover */}
  <div className="absolute inset-0 bg-[#cc0000]/30 backdrop-blur-sm border-l-4 border-red-900 rounded-lg transition-all duration-500 group-hover:opacity-0" />

  {/* Estrella PNG — visible en hover, detrás del texto */}
  <img
    src="/images/estrella.png"
    alt=""
    className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500"
    style={{ width: "100px", height: "100px", objectFit: "contain" }}
  />

  {/* Texto siempre visible */}
  <span className="relative z-10">{link.label}</span>
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
    { name: "Facebook", url: "https://www.facebook.com/produccionesrbolivia", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { name: "Instagram", url: "https://www.instagram.com/produccionesrbolivia", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { name: "TikTok", url: "https://www.tiktok.com/@producciones.r", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z"/></svg> },
    { name: "YouTube", url: "https://www.youtube.com/@ProduccionRBolivia", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7" aria-label="YouTube" style={{ color: "#fff", fill: "#fff" }}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg> },
  ].map((red) => (
    <a
      key={red.name}
      href={red.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white ${red.name === "YouTube" ? "hover:text-white" : "hover:text-red-400"} transition-all duration-300 hover:scale-125 drop-shadow-lg`}
      title={red.name}
      style={red.name === "YouTube" ? { color: "#fff" } : undefined}
    >
      {red.icon}
    </a>
  ))}
</div>
{/* Reproductor Spotify flotante */}
<div className="fixed top-4 right-4 z-50 rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
  <iframe
    src="https://open.spotify.com/embed/playlist/33Dm12hmIjAHgyBmitH1Bj?utm_source=generator&si=5ac5656695eb49c8"
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
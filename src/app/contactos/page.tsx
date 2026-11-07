"use client";
import Link from "next/link";

import MobileMenu from "@/components/MobileMenu";

const redes = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/produccionesrbolivia",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/produccionesrbolivia",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 md:w-7 md:h-7">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@producciones.r",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@ProduccionRBolivia",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7" aria-label="YouTube" style={{ color: "#fff", fill: "#fff" }}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Conócenos" },
  { href: "/servicios", label: "Qué hacemos" },
  { href: "/artistas", label: "Artistas" },
  { href: "/agenda", label: "Agenda" },
];

export default function Contactos() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col overflow-x-hidden bg-[#9e4a4a] relative font-sans">
      
      {/* ── FONDO CON TEXTURA ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url('/images/servicios.png')`,
            filter: "brightness(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* HEADER */}
        <header className="w-full flex items-center justify-between pt-6 md:pt-8 pb-4 shrink-0 flex-wrap gap-4">
          <div className="flex gap-3 sm:gap-5">
            {redes.map((red) => (
              <a key={red.name} href={red.url} target="_blank" rel="noopener noreferrer"
                 className="text-white hover:text-red-300 transition-transform duration-300 hover:scale-110 drop-shadow-md"
                 title={red.name}>
                {red.icon}
              </a>
            ))}
          </div>
          <nav className="hidden md:flex flex-wrap justify-end gap-1.5 md:gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="bg-[#8b0000] text-white font-bold text-[10px] sm:text-xs md:text-sm py-2 md:py-2.5 rounded-md hover:bg-[#660000] transition-colors shadow-lg tracking-wide text-center w-[80px] sm:w-[95px] md:w-[120px]">
                {link.label}
              </Link>
            ))}
          </nav>
          <MobileMenu links={navLinks} variant="default" className="absolute right-4 top-4 md:hidden" />
        </header>

        {/* ── CONTENIDO PRINCIPAL (2 Columnas) ── */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-around gap-12 py-10 pb-16">
          
          {/* COLUMNA 1: FORMULARIO E INFORMACIÓN */}
          <div className="w-full lg:w-[45%] flex flex-col gap-10">
            <div>
              <h2 className="text-white font-black text-2xl md:text-3xl tracking-wide mb-6 drop-shadow-md text-center lg:text-left">
                Contactos
              </h2>

              <form method="POST" className="flex flex-col gap-4">
                <input type="text" name="nombre" placeholder="Nombre" required autoComplete="name" className="w-full min-h-11 bg-[#e6dada] text-[#8b0000] placeholder-[#8b0000]/70 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc0000] font-bold text-base shadow-inner" />
                <input type="email" name="correo" placeholder="Correo" required autoComplete="email" inputMode="email" className="w-full min-h-11 bg-[#e6dada] text-[#8b0000] placeholder-[#8b0000]/70 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc0000] font-bold text-base shadow-inner" />
                <input type="text" name="pais" placeholder="País" autoComplete="country-name" className="w-full min-h-11 md:w-1/2 bg-[#e6dada] text-[#8b0000] placeholder-[#8b0000]/70 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc0000] font-bold text-base shadow-inner" />
                <textarea name="mensaje" rows={4} required placeholder="Envíanos tu mensaje" className="w-full min-h-[120px] bg-[#e6dada] text-[#8b0000] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc0000] font-bold text-base shadow-inner resize-none"></textarea>
                
                <div className="flex justify-end mt-2">
                  <button type="submit" className="min-h-11 min-w-11 rounded-lg px-4 text-white font-black uppercase tracking-widest text-sm hover:text-red-300 transition-colors drop-shadow-md">
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            {/* Información */}
            <div className="flex flex-col gap-4 text-white font-medium text-sm md:text-base items-center lg:items-start">
              <a href="tel:+59164122244" className="flex min-h-11 items-center gap-4 hover:text-red-300 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                <span>(591) 64122244</span>
              </a>
              <a href="mailto:infoproduccionesr@gmail.com" className="flex min-h-11 items-center gap-4 hover:text-red-300 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <span>infoproduccionesr@gmail.com</span>
              </a>
            </div>
          </div>

          {/* COLUMNA 2: LOGO GRANDE */}
          <div className="w-full lg:w-[45%] flex justify-center items-center opacity-90 hover:opacity-100 transition-opacity mt-8 lg:mt-0">
            <img 
              src="/images/20años.png" 
              alt="Producciones R" 
              className="w-[250px] md:w-[350px] lg:w-[450px] object-contain drop-shadow-2xl" 
            />
          </div>

        </div>
      </div>
    </div>
  );
}
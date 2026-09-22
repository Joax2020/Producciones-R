"use client";
import Link from "next/link";

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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/artistas", label: "Artistas" },
  { href: "/agenda", label: "Agenda" },
];

const servicios = [
  "Eventos culturales",
  "Management musical",
  "Booking musical",
  "Producción y postproducción discográfica",
  "Actividades de formación artística",
  "Comunicación",
];

export default function QuienesSomos() {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[#9e4a4a]">

      {/* ── ZONA PRINCIPAL CON IMAGEN DE FONDO ── */}
      <div
        className="flex-1 flex flex-col w-full min-h-0 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/quienessomos.png')`, 
        }}
      >
        
        {/* CAPA PARA ACLARAR EL FONDO (Puedes jugar con bg-white/10, bg-white/20, etc.) */}
        <div className="absolute inset-0 bg-white/15 z-0 pointer-events-none"></div>

        {/* CONTENEDOR CENTRAL */}
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col flex-1 min-h-0 relative z-10">

          {/* ── HEADER ── */}
          <header className="w-full flex items-center justify-between pt-6 md:pt-10 pb-4 shrink-0">
            
            <div className="flex gap-4 sm:gap-6">
              {redes.map((red) => (
                <a
                  key={red.name}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-300 transition-transform duration-300 hover:scale-110 drop-shadow-md"
                  title={red.name}
                >
                  {red.icon}
                </a>
              ))}
            </div>

            <nav className="flex gap-4 md:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-[#8b0000] text-white font-bold text-xs sm:text-sm md:text-base py-2 md:py-3 rounded-lg hover:bg-[#660000] transition-colors shadow-lg tracking-wide text-center w-[110px] md:w-[160px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </header>

          {/* ── CONTENIDO: Logo + Texto ── */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-2 mb-6 flex-1 min-h-0 items-center">

            <div className="w-full md:w-5/12 flex justify-center md:justify-start shrink-0">
              <img
                src="/images/20años.png"
                alt="Producciones R - 20 Años"
                className="w-full max-w-[280px] object-contain drop-shadow-2xl"
              />
            </div>

            <div className="w-full md:w-7/12 flex flex-col gap-4 overflow-y-auto pr-2" style={{ maxHeight: "100%" }}>
              <div className="bg-[#cc0000] px-6 py-2 rounded-md w-max shadow-md shrink-0">
                <h2 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
                  Quienes somos
                </h2>
              </div>

              <div className="space-y-6 text-white text-xs sm:text-sm leading-relaxed text-justify pb-4">
                <p className="drop-shadow-md">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                  minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                  luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
              </div>
            </div>
          </div>

          {/* ── GRILLA DE SERVICIOS ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-x-4 gap-y-6 pb-8 shrink-0">
            {servicios.map((servicio, index) => (
              <div key={index} className="flex items-center gap-4 w-full max-w-[260px] mx-auto">
                <img
                  src="/images/estrella.png"
                  alt="★"
                  className="w-10 h-10 md:w-12 md:h-12 shrink-0 object-contain drop-shadow-lg"
                />
                <span className="text-white font-bold text-xs md:text-sm leading-tight text-balance drop-shadow-md">
                  {servicio}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── LOGOS ALIADOS ── */}
      <div className="w-full py-6 md:py-8 text-center shrink-0 z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.15)] bg-[#d4a0a0]">
        <h3 className="font-black text-sm md:text-base tracking-[0.5em] uppercase text-[#8b0000]">
          LOGOS ALIADOS
        </h3>
        <div className="mt-4 flex flex-wrap justify-center gap-10 min-h-[40px] px-8 md:px-16" />
      </div>

    </div>
  );
}
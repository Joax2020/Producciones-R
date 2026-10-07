"use client";
import Link from "next/link";

// ── 1. "BASE DE DATOS" TEMPORAL DE EVENTOS ──
// Para añadir un evento, solo copia un bloque {...} de estos y cambia los datos.
// Si no hay venta de entradas, déjalo como: entradas: null
const eventosData = [
  {
    id: "1",
    fecha: "Octubre 16",
    artista: "Wara Bolivia",
    gira: "53 AÑOS DE LUZ – Nuevo Disco",
    ciudad: "La Paz",
    lugar: "Teatro Municipal 6 de Agosto",
    hora: "19:30 H",
    redes: { 
      fb: "https://www.facebook.com/share/1HUu76FoST/", 
      wa: "https://wa.me/59164122244" 
    },
    entradas: "https://superticket.bo/Wara-Bolivia---En-Concierto/"
  },
  {
    id: "2",
    fecha: "Octubre 17",
    artista: "Presentación de Libro",
    gira: "QUEDA LA MÚSICA",
    ciudad: "Cochabamba",
    lugar: "19° Feria Internacional del Libro Salón Néstor Taboada",
    hora: "19:00 H",
    redes: { 
      fb: "#", // Pendiente
      wa: "https://wa.me/59164122244" 
    },
    entradas: null // Al ser null, el botón extra no aparecerá
  }
];

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Conócenos" },
  { href: "/servicios", label: "Qué hacemos" },
  { href: "/artistas", label: "Artistas" },
  { href: "/contactos", label: "Contáctanos" },
];

export default function Agenda() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white overflow-x-hidden">
      
      {/* ── HEADER NEGRO (Compacto, logos esquinados y botones grandes) ── */}
      <div className="w-full bg-black shrink-0 relative z-20 py-5 md:py-6 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
        
        {/* Lado Izquierdo: Redes + Botones */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto items-center md:items-start">
          
          {/* Redes Sociales esquinadas */}
          <div className="flex gap-4 text-white px-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 hover:text-red-500 cursor-pointer transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5 hover:text-red-500 cursor-pointer transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 hover:text-red-500 cursor-pointer transition-colors"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z" /></svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 hover:text-red-500 cursor-pointer transition-colors"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
          </div>

          {/* Navegación a la izquierda (Botones completos) */}
          <nav className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#cc0000] text-white font-bold text-xs sm:text-sm md:text-base py-2.5 md:py-3 px-2 rounded-lg hover:bg-red-700 transition-colors shadow-lg tracking-wide text-center w-[100px] sm:w-[120px] md:w-[130px] lg:w-[160px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logo a la derecha */}
        <Link href="/" className="w-[180px] md:w-[220px] lg:w-[260px] shrink-0 transition-transform hover:scale-105">
          <img
            src="/images/logo.png" 
            alt="Producciones R 20 Años"
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* ── CUERPO DE LA AGENDA (Fondo Blanco) ── */}
      <div className="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-20 z-10">
        
        {/* Grilla de Tarjetas (Solo renderiza los eventos que existen) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {eventosData.map((evento) => (
            <div key={evento.id} className="w-full flex justify-center">
              
              {/* Tarjeta de Evento Real */}
              <div className="w-full max-w-[320px] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col font-sans transition-transform hover:-translate-y-2 duration-300">
                
                {/* Sección Superior (Fecha y Artista) */}
                <div className="bg-[#a37b7b] text-white p-5 flex-1 flex flex-col justify-start">
                  <p className="text-sm tracking-wide font-medium">{evento.fecha}</p>
                  <h3 className="text-xl md:text-2xl font-black mt-1 uppercase leading-tight drop-shadow-sm">
                    {evento.artista}
                  </h3>
                </div>

                {/* Franja Central (Nombre Gira) */}
                <div className="bg-[#c59c9c] text-[#8b0000] text-center py-2.5 shadow-inner px-2">
                  <p className="font-black text-sm md:text-base tracking-[0.2em] uppercase">
                    {evento.gira}
                  </p>
                </div>

                {/* Sección Inferior (Lugar, Ciudad, Hora) */}
                <div className="bg-[#a37b7b] text-white p-5 flex-1 flex flex-col justify-end relative min-h-[140px]">
                  <div className="text-right flex flex-col gap-0.5 mb-8">
                    <p className="text-sm font-medium tracking-wide">{evento.ciudad}</p>
                    <p className="text-base font-bold tracking-wide">{evento.lugar}</p>
                    <p className="text-sm font-medium tracking-wide">{evento.hora}</p>
                  </div>

                  {/* Redes sociales y Entradas en la esquina inferior izquierda */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    
                    {/* FB Icon */}
                    <a href={evento.redes.fb} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors cursor-pointer">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    
                    {/* WA Icon */}
                    <a href={evento.redes.wa} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors cursor-pointer">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    </a>

                    {/* Botón de Entradas Extra (Solo se muestra si hay URL) */}
                    {evento.entradas && (
                      <a href={evento.entradas} target="_blank" rel="noopener noreferrer" className="ml-1 bg-white/20 hover:bg-white/40 border border-white/60 text-white rounded-full px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] uppercase transition-colors">
                        Entradas
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import MobileMenu from "@/components/MobileMenu";

// ── 1. "BASE DE DATOS" TEMPORAL DE ARTISTAS ──
type Artista = {
  id: string; nombre: string; imagen: string; imagen2: string | null;
  fechaLugar: string; descripcion: string[];
  redes: { fb: string|null; ig: string|null; yt: string|null; sp: string|null };
  tickets: string | null; video: string | null;
  posicion?: string;   // enfoque en la tarjeta
  posicion2?: string;  // enfoque en el panel derecho
};
const artistasData: Artista[] = [
  {
    id: "1",
    nombre: "Gabo Guzmán",
    imagen: "/images/artistas/gaboguzman.jpg", 
    imagen2: "/images/artistas/gaboguzman2.jpg", // Foto exclusiva para los detalles
    fechaLugar: "GABO GUZMÁN", 
    descripcion: [
      "Gabo Guzmán es guitarra boliviana, es guitarra chuquisaqueña, es guitarra de otros lados, es guitarra así nomás.",
      "«Se mete con casi todo: cueca, bailecito, música de compositor, canciones, instrumentales, rock. Y no es una melange, es una selección acomodada para que el espectador no sufra de monotonía auditiva. Para que la sorpresa lo encuentre, aun escuchándolo… varias veces.»",
      "Músico boliviano. Estudió en el Conservatorio Nacional de Música de La Paz, donde fue docente por 7 años. Es graduado de la cátedra de Guitarra en la Escuela Nacional de Música de La Habana, Cuba.",
      "Ha participado y grabado distintos materiales discográficos con las agrupaciones TallerTaká (3 discos) y Sobrevigencia (2 discos). Tiene tres producciones como solista: Destrenzas (2011), Lalay (2020) y Revolví (2024).",
      "Como guitarrista acompañó a cantantes bolivianas reconocidas como Luzmila Carpio y Jenny Cárdenas. Ha escrito música para Teatro.",
      "Ha compartido escenario con importantes músicos bolivianos como: Luzmila Carpio, Manuel Monroy, Luis Rico, Álvaro Montenegro, Luis Gutiérrez, Emma Junaro, Julio Godoy (Los Jairas), Juan Carlos Cordero, Raúl Chacón (Bolivia Manta/Rupay), Omar Baldiviezo, César Junaro, Oscar García, David Portillo, Grillo Villegas, Omar Gonzales, Panchi Maldonado, Vadik, Entre 2 Aguas, Mellizos Gonzales, Tincho Castillo y Quimbando.",
      "Ha tocado en escenarios de varias ciudades de Bolivia y ha visitado con su música: Argentina, Francia, Suiza, España, Polonia, Eslovenia, Bélgica y Cuba.",
      "Cree en una cierta bastardía luminosa que ha de salvar alguno de los sueños humanos gracias a la música."
    ],
    redes: { 
      fb: "https://www.facebook.com/gaboguzmanguitarreante/", 
      ig: null, 
      yt: "https://www.youtube.com/@gaboguzmanguitarreante",
      sp: "https://open.spotify.com/intl-es/artist/0HiWSTZpsV3bJGudWjDk4c?si=anG3T0qPSgq2hw3gMtBuiA"
    },
    tickets: null,
    video: "https://youtu.be/Q5Z6sCuHmig" 
  },
  {
    id: "2",
    nombre: "Encuentro - Guitarras Bolivianas",
    imagen: "/images/artistas/encuentro.jpg", 
    imagen2: null, // Al no tener imagen2, el código usará automáticamente la imagen 1
    fechaLugar: "Encuentro - Guitarras Bolivianas",
    posicion: "center 30%",
    posicion2: "center 20%",
    descripcion: [
      "Wara es una de las agrupaciones más icónicas y fundamentales de la música boliviana.",
      "Con más de 50 años de trayectoria, han sabido fusionar el rock con la música folclórica, creando un sonido único que ha trascendido generaciones."
    ],
    redes: { fb: "#", ig: "#", yt: "#", sp: null },
    tickets: null,
    video: null
  },
];

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Conócenos" },
  { href: "/servicios", label: "Qué hacemos" },
  { href: "/agenda", label: "Agenda" },
  { href: "/contactos", label: "Contáctanos" },
];

export default function Artistas() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArtist, setSelectedArtist] = useState<Artista | null>(null);
  const carouselStartRef = useRef<{ x: number; y: number } | null>(null);
  const detailStartRef = useRef<{ x: number; y: number } | null>(null);
  const suppressClickRef = useRef(false);

  const artistaActual = artistasData[currentIndex];

  const goToIndex = (index: number) => {
    const normalizedIndex = (index + artistasData.length) % artistasData.length;
    setCurrentIndex(normalizedIndex);
    if (selectedArtist) {
      setSelectedArtist(artistasData[normalizedIndex]);
    }
  };

  const nextArtist = () => {
    goToIndex(currentIndex + 1);
  };

  const prevArtist = () => {
    goToIndex(currentIndex - 1);
  };

  const handleCloseArtist = () => {
    setSelectedArtist(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextArtist();
      }
      if (event.key === "ArrowLeft") {
        prevArtist();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const handleCarouselTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    carouselStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleCarouselTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!carouselStartRef.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - carouselStartRef.current.x;
    const deltaY = touch.clientY - carouselStartRef.current.y;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      suppressClickRef.current = true;
      if (deltaX < 0) {
        nextArtist();
      } else {
        prevArtist();
      }
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }

    carouselStartRef.current = null;
  };

  const handleDetailTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    detailStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleDetailTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!detailStartRef.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - detailStartRef.current.x;
    const deltaY = touch.clientY - detailStartRef.current.y;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextArtist();
      } else {
        prevArtist();
      }
      return;
    }

    if (deltaY > 50 && Math.abs(deltaY) > Math.abs(deltaX)) {
      handleCloseArtist();
    }

    detailStartRef.current = null;
  };

  const handleArtistSelect = () => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    setSelectedArtist(artistaActual);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-black overflow-x-hidden overflow-y-auto font-sans relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none" style={{ backgroundImage: `url('/images/escenario.png')` }} />
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 pointer-events-none" />

  {!selectedArtist && (
 
  <header className="relative z-30 w-full max-w-[1400px] mx-auto px-3 sm:px-6 md:px-16 lg:px-24 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between pt-6 md:pt-8 pb-4 shrink-0">
   
    <Link href="/" className="w-[110px] md:w-[180px] lg:w-[220px] shrink-0 transition-transform hover:scale-105">
      <img src="/images/logo.png" alt="Producciones R 20 Años" className="w-full h-auto object-contain" />
    </Link>
    <nav className="hidden md:flex flex-wrap justify-center gap-1.5 md:justify-end md:gap-3">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="bg-[#8b0000] text-white font-bold text-[9px] sm:text-[10px] md:text-sm py-2 md:py-2.5 rounded-md hover:bg-[#660000] transition-colors shadow-lg tracking-wide text-center w-[70px] sm:w-[85px] md:w-[120px]"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </header>
    )}

    <div className="absolute right-4 top-4 z-40">
      <MobileMenu links={navLinks} variant="default" />
    </div>
      {/* ── CONDICIONAL: CARRUSEL O DETALLE ── */}
      {!selectedArtist ? (
        
        /* ── VISTA 1: CARRUSEL DE ARTISTAS ── */
        <div className="flex-1 relative w-full flex flex-col items-center justify-center">

          <div className="relative z-10 flex items-center justify-center w-full px-4">
            <button
              type="button"
              onClick={prevArtist}
              aria-label="Artista anterior"
              className="min-h-11 min-w-11 text-white hover:text-red-500 active:text-red-300 transition-colors p-3 md:p-8 active:scale-95"
            >
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-10 h-10 md:w-16 md:h-16"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>

            <div
              className="flex flex-col items-center gap-4 md:gap-6 cursor-pointer group"
              onTouchStart={handleCarouselTouchStart}
              onTouchEnd={handleCarouselTouchEnd}
              onClick={handleArtistSelect}
              style={{ touchAction: "pan-y" }}
            >
              <img
                src={artistaActual.imagen}
                alt={artistaActual.nombre}
                className="max-w-[80vw] md:max-w-[560px] max-h-[45vh] w-auto h-auto rounded-3xl object-contain shadow-[0_0_40px_rgba(204,0,0,0.3)] transition-transform duration-500 group-hover:scale-105 active:scale-95 md:group-hover:scale-105"
              />
              <h2 className="text-white font-bold text-sm md:text-lg tracking-[0.2em] uppercase drop-shadow-md text-center group-hover:text-red-400 transition-colors">
                {artistaActual.fechaLugar}
              </h2>
            </div>

            <button
              type="button"
              onClick={nextArtist}
              aria-label="Artista siguiente"
              className="min-h-11 min-w-11 text-white hover:text-red-500 active:text-red-300 transition-colors p-3 md:p-8 active:scale-95"
            >
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-10 h-10 md:w-16 md:h-16"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>

          <div className="relative z-10 mt-4 flex items-center justify-center gap-2 md:hidden">
            {artistasData.map((artista, index) => (
              <button
                key={artista.id}
                type="button"
                aria-label={`Ir al artista ${index + 1}`}
                onClick={() => goToIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 active:scale-125 ${
                  index === currentIndex ? "bg-[#cc0000] shadow-[0_0_12px_rgba(204,0,0,0.8)]" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

      ) : (

        /* ── VISTA 2: DETALLE DEL ARTISTA ── */
        <div
          className="flex-1 w-full h-full flex flex-col md:flex-row animate-in fade-in duration-500 overflow-hidden"
          onTouchStart={handleDetailTouchStart}
          onTouchEnd={handleDetailTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          <div className="order-1 relative w-full h-[38dvh] min-h-[260px] md:h-full md:w-1/2 md:order-none bg-black shrink-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${selectedArtist.imagen2 || selectedArtist.imagen}')`, backgroundPosition: selectedArtist.posicion2 ?? "top" }}
            />
          </div>

          <div className="order-2 w-full bg-[#a37b7b] flex flex-col relative p-4 md:w-1/2 md:h-full md:p-10 lg:p-14 md:order-none">
            <div className="sticky top-0 z-10 -mx-4 mb-4 flex items-center justify-between border-b border-white/15 bg-[#a37b7b]/90 px-4 pb-3 pt-3 backdrop-blur-sm md:static md:mx-0 md:mb-6 md:border-b-0 md:bg-transparent md:p-0 md:pb-0">
              <button
                type="button"
                onClick={handleCloseArtist}
                className="flex min-h-11 min-w-11 items-center justify-center text-white hover:text-black active:text-black transition-colors"
                title="Volver"
                aria-label="Volver"
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
              </button>

              <div className="flex items-center gap-3 text-white md:gap-4">
                {selectedArtist.redes.fb && <a href={selectedArtist.redes.fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex min-h-11 min-w-11 items-center justify-center text-white hover:text-black active:text-black transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>}
                {selectedArtist.redes.ig && <a href={selectedArtist.redes.ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex min-h-11 min-w-11 items-center justify-center text-white hover:text-black active:text-black transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>}
                {selectedArtist.redes.yt && <a href={selectedArtist.redes.yt} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex min-h-11 min-w-11 items-center justify-center text-white hover:text-black active:text-black transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6" aria-label="YouTube"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>}
                {selectedArtist.redes.sp && <a href={selectedArtist.redes.sp} target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="flex min-h-11 min-w-11 items-center justify-center text-white hover:text-black active:text-black transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zM19.38 14.1c-.3.42-.84.54-1.26.24-3.36-2.04-8.52-2.64-12.54-1.44-.48.12-1.02-.18-1.14-.66-.12-.48.18-1.02.66-1.14 4.56-1.32 10.26-.66 14.04 1.62.48.3.6.84.24 1.38zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.12-1.38-.72-.18-.6.12-1.2.72-1.38 4.2-1.26 11.28-1.02 16.2 1.92.54.3 0.72.96.42 1.5-.24.6-.96.78-1.5.42z"/></svg></a>}
              </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto text-white/90 text-[13px] md:text-[15px] leading-relaxed text-justify pr-1 pb-6 md:pr-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-track]:bg-transparent">
              <div className="space-y-4">
                {selectedArtist.descripcion.map((parrafo, i) => (
                  <p key={i} className="italic">{parrafo}</p>
                ))}
              </div>

              {selectedArtist.video && (
                <div className="mt-8 w-full overflow-hidden rounded-xl border border-white/20 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={selectedArtist.video.includes("youtu.be") ? selectedArtist.video.replace("youtu.be/", "www.youtube.com/embed/") : selectedArtist.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            <div className="shrink-0 mt-6 flex items-end justify-between border-t border-white/20 pt-4">
              <div className="flex flex-col text-white font-bold tracking-[0.1em] uppercase text-[10px] md:text-xs leading-tight drop-shadow-md">
                {selectedArtist.fechaLugar.split(' - ').map((linea, index) => (
                  <span key={index}>{linea}</span>
                ))}
              </div>
              
              {selectedArtist.tickets && (
                <a 
                  href={selectedArtist.tickets} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-4 text-[#8b0000] font-black tracking-widest uppercase text-xs md:text-sm hover:text-white transition-colors"
                >
                  TICKETS
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
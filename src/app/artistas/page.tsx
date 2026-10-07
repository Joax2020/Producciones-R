"use client";
import Link from "next/link";
import { useState } from "react";

// ── 1. "BASE DE DATOS" TEMPORAL DE ARTISTAS ──
const artistasData = [
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
      sp: "https://open.spotify.com/intl-es/artist/41ZOFR3Vf9SBKsjjmKhlQl?si=rZDY2K4lRe-3nqM7Z0knaw"
    },
    tickets: null,
    video: "https://youtu.be/Q5Z6sCuHmig" 
  },
  {
    id: "2",
    nombre: "Wara Bolivia",
    imagen: "/images/artistas/encuentro.jpg", 
    imagen2: null, // Al no tener imagen2, el código usará automáticamente la imagen 1
    fechaLugar: "WARA BOLIVIA - 53 AÑOS DE LUZ",
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
  const [selectedArtist, setSelectedArtist] = useState<typeof artistasData[0] | null>(null);

  const artistaActual = artistasData[currentIndex];

  const nextArtist = () => {
    setCurrentIndex((prev) => (prev === artistasData.length - 1 ? 0 : prev + 1));
  };

  const prevArtist = () => {
    setCurrentIndex((prev) => (prev === 0 ? artistasData.length - 1 : prev - 1));
  };

  const handleCloseArtist = () => {
    setSelectedArtist(null);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-black overflow-hidden font-sans relative">
      
      {/* ── HEADER NEGRO (Solo en carrusel) ── */}
      {!selectedArtist && (
        <div className="w-full bg-black shrink-0 relative z-30 py-5 md:py-6 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md border-b border-white/10">
          <Link href="/" className="w-[120px] md:w-[180px] lg:w-[220px] shrink-0 transition-transform hover:scale-105">
            <img src="/images/logo.png" alt="Producciones R 20 Años" className="w-full h-auto object-contain" />
          </Link>
          <nav className="flex justify-end gap-2 sm:gap-3 md:gap-4 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#cc0000] text-white font-bold text-[10px] sm:text-xs md:text-sm py-2.5 md:py-3 px-2 rounded-lg hover:bg-red-700 transition-colors shadow-lg tracking-wide text-center w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* ── CONDICIONAL: CARRUSEL O DETALLE ── */}
      {!selectedArtist ? (
        
        /* ── VISTA 1: CARRUSEL DE ARTISTAS ── */
        <div className="flex-1 relative w-full flex flex-col items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-700"
            style={{ backgroundImage: `url('/images/escenario.png')` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

          <div className="relative z-10 flex items-center justify-center w-full px-4">
            <button onClick={prevArtist} className="text-white hover:text-red-500 transition-colors p-4 md:p-8">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>

            <div className="flex flex-col items-center gap-6 cursor-pointer group" onClick={() => setSelectedArtist(artistaActual)}>
              <div 
                className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(204,0,0,0.3)] w-[260px] h-[260px] md:w-[350px] md:h-[250px] lg:w-[450px] lg:h-[300px] transition-transform duration-500 group-hover:scale-105 bg-cover bg-center"
                style={{ backgroundImage: `url('${artistaActual.imagen}')` }}
              >
                {!artistaActual.imagen && <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-500">Imagen no disp.</div>}
              </div>
              <h2 className="text-white font-bold text-sm md:text-lg tracking-[0.2em] uppercase drop-shadow-md text-center group-hover:text-red-400 transition-colors">
                {artistaActual.fechaLugar}
              </h2>
            </div>

            <button onClick={nextArtist} className="text-white hover:text-red-500 transition-colors p-4 md:p-8">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>

      ) : (

        /* ── VISTA 2: DETALLE DEL ARTISTA ── */
        <div className="flex-1 w-full h-full flex flex-col md:flex-row animate-in fade-in duration-500 overflow-hidden">
          
          {/* PANEL IZQUIERDO */}
          <div className="w-full md:w-1/2 bg-[#a37b7b] h-[50vh] md:h-full flex flex-col relative p-6 md:p-10 lg:p-14">
            
            <div className="flex justify-between items-start mb-6 shrink-0">
              <button 
                onClick={handleCloseArtist} 
                className="text-white hover:text-black transition-colors"
                title="Volver"
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
              </button>

              <div className="flex gap-4 text-white">
                {selectedArtist.redes.fb && <a href={selectedArtist.redes.fb} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>}
                {selectedArtist.redes.ig && <a href={selectedArtist.redes.ig} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>}
                {selectedArtist.redes.yt && <a href={selectedArtist.redes.yt} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg></a>}
                {selectedArtist.redes.sp && <a href={selectedArtist.redes.sp} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zM19.38 14.1c-.3.42-.84.54-1.26.24-3.36-2.04-8.52-2.64-12.54-1.44-.48.12-1.02-.18-1.14-.66-.12-.48.18-1.02.66-1.14 4.56-1.32 10.26-.66 14.04 1.62.48.3.6.84.24 1.38zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.12-1.38-.72-.18-.6.12-1.2.72-1.38 4.2-1.26 11.28-1.02 16.2 1.92.54.3 0.72.96.42 1.5-.24.6-.96.78-1.5.42z"/></svg></a>}
              </div>
            </div>

            {/* Scroll Interno: TEXTO + VIDEO AL FINAL */}
            <div className="flex-1 overflow-y-auto text-white/90 text-[13px] md:text-[15px] leading-relaxed text-justify pr-4 pb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-track]:bg-transparent">
              
              <div className="space-y-4">
                {selectedArtist.descripcion.map((parrafo, i) => (
                  <p key={i} className="italic">{parrafo}</p>
                ))}
              </div>

              {selectedArtist.video && (
                <div className="mt-8 w-full aspect-video bg-black rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/20">
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedArtist.video.includes("youtu.be") ? selectedArtist.video.replace("youtu.be/", "www.youtube.com/embed/") : selectedArtist.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            {/* Footer Izquierdo */}
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
                  className="text-[#8b0000] font-black tracking-widest uppercase text-xs md:text-sm hover:text-white transition-colors ml-4"
                >
                  TICKETS
                </a>
              )}
            </div>
          </div>

          {/* PANEL DERECHO ESTÁTICO */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full relative bg-black shrink-0">
            {/* AQUÍ ESTÁ LA MAGIA: bg-top y el Fallback a la imagen original si imagen2 es null */}
            <div 
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url('${selectedArtist.imagen2 || selectedArtist.imagen}')` }}
            />
            
            {/* Reproductor Decorativo */}
            <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-64 bg-black/50 backdrop-blur-md p-4 rounded-xl hidden md:flex items-center gap-4 border border-white/10">
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shrink-0">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5"><path d="M5 3l14 9-14 9V3z" /></svg>
               </div>
               <div className="flex-1">
                 <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                   <div className="h-full bg-[#cc0000] w-1/3"></div>
                 </div>
               </div>
               <div className="flex gap-2 text-white shrink-0">
                 <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" /></svg>
                 <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
               </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
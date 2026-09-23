"use client";
import Link from "next/link";
import { useState } from "react";

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
  { href: "/contactos", label: "Contactos" },
];

type Servicio = {
  id: string;
  label: string;
  titulo: string;
  descripcion: string[];
  lado: "izquierda" | "derecha";
};

// Hemos importado todos los textos de tu Word y añadido el 7mo servicio
const servicios: Servicio[] = [
  {
    id: "eventos-culturales",
    label: "Eventos culturales",
    titulo: "Eventos culturales",
    descripcion: [
      "- Diseño, gestión y producción de eventos culturales: conciertos, festivales, ferias, activaciones de marca, eventos de lanzamiento, congresos.",
      "- Trabajamos desde la generación de la idea, pasando por el diseño escénico, la gestión de espacios, la coordinación personal e institucional, producción técnica, montaje, jefatura de piso, hospitalidad, comunicación, venta de entradas, registros fotográficos y audiovisuales, hasta la comunicación finalizado el evento.",
      "- Hemos producido conciertos y festivales en distintos tipos y tamaños de venues en Bolivia: Teatros al aire libre, teatros medianos y pequeños, centros culturales, auditorios, plazas, ferias callejeras, museos, hoteles, pubs… hemos sido parte de más de 300 conciertos desde 2006.",
      "- Hemos gestado y/u organizado giras por Bolivia y a Brasil, Ecuador, Chile, y Perú.",
      "- Hemos trabajado con artistas bolivianos como: César, Jaime y Emma Junaro, Manuel Monroy, Luz del Ande, Atajo, Piraí Vaca, Entre 2 Aguas, Negro y Blanco, Kalamarka, Gabo Guzmán, Altiplano, Wara y Aviónica entre muchos otros.",
      "- Produjimos y gestamos la llegada de artistas a Bolivia: Luis Eduardo Aute (España), NTVG y Daniel Viglietti (Uruguay), Gustavo Santaolalla, Vicentico, Raly Barrionuevo, Manu Sija, Kevin Johansen & Liniers, Micaela Chauque (Argentina), Sargento García (Francia), Santiago Feliú, Liuba María Hevia (Cuba), Los Panchos (México), Manuel García (Chile) Jimmy Rip (USA) entre otros.",
      "- Asimismo, hemos producido y acompañado distintos eventos en Bolivia:\n  • Bolivia FestiJazz Internacional\n  • FestiBlues Bolivia\n  • 37° Olimpiada Internacional de Informática - IOI\n  • Teatro Grito\n  • Ministerio de Culturas y Turismo\n  • Viceministerio de Desarrollo de Culturas\n  • IX Festival Internacional de Cine y Video de los Pueblos Indígenas - CEFREC\n  • VI Bienal Internacional de Arte – SIART Bolivia 2009\n  • Centro de Orientación Socio Legal para el Adulto Mayor (COSLAM)\n  • Entre otros…."
    ],
    lado: "izquierda",
  },
  {
    id: "management-musical",
    label: "Management musical",
    titulo: "Management musical",
    descripcion: [
      "- Gestión estratégica de carreras y proyectos musicales. Desarrollo a corto y largo plazo. Administración de contratos, acuerdos, finanzas, equipos de trabajo, red de contactos, imagen, marca, difusión…",
      "- Hemos tenido la alegría de trabajar con: Jaime Junaro, Atajo, la Chiva, Entre 2 Aguas, TallerTaká, Suyana, Santamandinga, Mandíbula, Gabo Guzmán…"
    ],
    lado: "izquierda",
  },
  {
    id: "booking-musical",
    label: "Booking musical",
    titulo: "Booking musical",
    descripcion: [
      "- Somos miembros de la Asociación Latinoamericana de Managers y hemos construido una red internacional de productores y programadores que nos ha permitido estar en distintos mercados de la música en Sudamérica, gestando diversas conexiones que han dado lugar a presentaciones y giras de artistas bolivianos.",
      "- Gestamos giras y viajes de artistas bolivianos al exterior del país: Atajo a Brasil (2008) – Entre 2 Aguas y Negro y Blanco a Perú (2011) – Norte Potosí a Perú (2014) - La Chiva a Brasil (2015) – Entre 2 Aguas a Ecuador (2015) - Suyana a Chile (2015) – Rantés a Chile (2016) – Armadura y Ciudad Líquida a Chile (2017) – Vadik Barrón a Uruguay (2018) – Gustavo Orihuela a Chile (2018) – Carlos Fischer a Chile (2019)"
    ],
    lado: "izquierda",
  },
  {
    id: "produccion-postproduccion",
    label: "Producción y postproducción",
    titulo: "Producción y post-producción discográfica",
    descripcion: [
      "- Coordinación de equipos de trabajo: músicos, productores, ingenieros, diseñadores. Gestión de estudios de grabación, imprentas, plataformas musicales…"
    ],
    lado: "derecha",
  },
  {
    id: "formacion-artistica",
    label: "Actividades de formación artística",
    titulo: "Actividades de formación artística",
    descripcion: [
      "- Organización de cursos, charlas, talleres y otros espacios de formación artística.",
      "- Gestión de espacios, insumos y equipamiento. Logística técnica, difusión y supervisión de ejecución…"
    ],
    lado: "derecha",
  },
  {
    id: "comunicacion",
    label: "Comunicación",
    titulo: "Comunicación",
    descripcion: [
      "- Manejo de equipos de diseño gráfico y audiovisual, sesiones de fotografía.",
      "- Elaboración de estrategias de difusión y agenda de medios para eventos artísticos.",
      "- Lanzamientos musicales."
    ],
    lado: "derecha",
  },
  {
    id: "sello-digital",
    label: "Sello de música digital",
    titulo: "Sello de música digital",
    descripcion: [
      "- A través de nuestro sello QUMBRE MUSIC colocamos tu música en las principales plataformas de streaming musical y tiendas virtuales: Spotify, Deezer, YouTube Music, Itunes, Amazon Music…",
      "- Lanzamiento de sencillos, EP’s y LP’s.",
      "- Lanzamiento de videoclips y conciertos.",
      "- Canales VEVO."
    ],
    lado: "derecha",
  },
];

export default function Servicios() {
  const [servicioActivo, setServicioActivo] = useState<string | null>(null);

  const servicioSeleccionado = servicios.find((s) => s.id === servicioActivo) ?? null;
  const izquierda = servicios.filter((s) => s.lado === "izquierda");
  const derecha = servicios.filter((s) => s.lado === "derecha");

  return (
    <div className="min-h-screen w-full bg-[#9e4a4a]">
      {/* Añadido bg-fixed para que si la Vista 2 es muy larga, el fondo acompañe sin cortarse */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden"
        style={{
          backgroundImage: `url('/images/servicios.png')`,
          filter: "brightness(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col min-h-screen">
          
          {/* ── HEADER ── */}
          <header className="w-full flex items-center justify-between pt-6 md:pt-10 pb-4 shrink-0">
            <h1 className="text-[#8b0000] font-black text-2xl md:text-3xl tracking-widest uppercase drop-shadow-md">
              Servicios
            </h1>

            <nav className="flex gap-3 md:gap-6 z-30">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-[#cc0000] text-white font-bold text-xs sm:text-sm md:text-base py-2 md:py-3 px-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg tracking-wide text-center w-[100px] md:w-[150px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </header>

          {/* ── CONTENIDO PRINCIPAL ── */}
          <div className="flex-1 flex flex-col items-center justify-center py-8 relative">
            {!servicioSeleccionado ? (
              
              // ── VISTA 1: disco + botones ──
              <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between min-h-[60vh]">
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <img
                    src="/images/disco.png"
                    alt="Disco - Servicios Producciones R"
                    className="w-[90vw] md:w-[750px] lg:w-[900px] xl:w-[1000px] aspect-square object-contain drop-shadow-2xl opacity-[0.85]"
                  />
                </div>

                <div className="hidden md:flex flex-col justify-center gap-8 lg:gap-12 z-20 w-[180px] lg:w-[220px]">
                  {izquierda.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setServicioActivo(s.id)}
                      className="bg-white text-[#cc0000] font-bold text-xs lg:text-[13px] px-4 py-3 lg:py-4 rounded-md shadow-xl hover:scale-105 hover:bg-gray-100 transition-all w-full text-center"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                <div className="hidden md:flex flex-col justify-center gap-8 lg:gap-12 z-20 w-[180px] lg:w-[220px]">
                  {derecha.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setServicioActivo(s.id)}
                      className="bg-white text-[#cc0000] font-bold text-xs lg:text-[13px] px-4 py-3 lg:py-4 rounded-md shadow-xl hover:scale-105 hover:bg-gray-100 transition-all w-full text-center"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* Botones apilados en mobile */}
                <div className="flex md:hidden flex-col gap-4 w-full max-w-xs z-20 mx-auto mt-10">
                  {servicios.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setServicioActivo(s.id)}
                      className="bg-white text-[#cc0000] font-bold text-xs px-4 py-3 rounded-md shadow-lg hover:scale-105 transition-transform text-center"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

            ) : (

              // ── VISTA 2: Estilo "Bloque negro inferior" como en el PDF ──
              <div className="w-full flex flex-col flex-1 relative z-20 mt-4 md:mt-12">
                
                {/* Botón Volver */}
                <button
                  onClick={() => setServicioActivo(null)}
                  className="self-start text-[#cc0000] font-black text-xs md:text-sm uppercase tracking-widest hover:text-white transition-colors mb-6 md:mb-10 px-4 py-2 bg-black/20 rounded-md"
                >
                  ← Volver a Servicios
                </button>

                {/* Título flotando arriba a la izquierda como en el diseño */}
                <div className="flex items-center gap-3 mb-10 md:mb-16">
                  <img
                    src="/images/estrella.png"
                    alt="★"
                    className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-lg"
                  />
                  <h2 className="text-[#8b0000] font-black text-lg md:text-xl lg:text-2xl leading-tight drop-shadow-md max-w-[200px] md:max-w-[250px]">
                    {servicioSeleccionado.titulo}
                  </h2>
                </div>

                {/* Disco de fondo (mitad visible detrás del título) */}
                <div className="absolute top-0 right-0 md:right-10 flex items-center justify-center pointer-events-none z-[-1]">
                  <img
                    src="/images/disco.png"
                    alt="Disco Fondo"
                    className="w-[120vw] md:w-[700px] lg:w-[900px] aspect-square object-contain opacity-[0.4]"
                  />
                </div>

                {/* Bloque negro full-width (rompiendo el contenedor) que contiene todo el texto */}
                <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#111111]/95 flex-1 pt-8 pb-12 md:pt-12 md:pb-16 shadow-2xl mt-auto">
                  <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col h-full">
                    
                    <div className="flex flex-col gap-4 text-white/90 text-xs md:text-sm lg:text-[13px] leading-relaxed text-justify mb-10">
                      {servicioSeleccionado.descripcion.map((parrafo, i) => (
                        <p key={i} className="whitespace-pre-line">{parrafo}</p>
                      ))}
                    </div>

                    {/* Footer interno dentro de la caja negra (Vista 2) */}
                    <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
                      <div className="flex gap-8 text-[#cc0000] font-bold text-sm uppercase tracking-widest">
                        <span>Contactos</span>
                        <span>Facebook</span>
                      </div>
                      <div className="flex gap-4">
                        {redes.map((red) => (
                          <a
                            key={red.name}
                            href={red.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-red-500 transition-transform duration-300 hover:scale-110 drop-shadow-md"
                          >
                            {red.icon}
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}
          </div>

          {/* ── REDES SOCIALES (Solo en Vista 1) ── */}
          {!servicioSeleccionado && (
            <div className="flex justify-end gap-4 pb-6 shrink-0 relative z-30">
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
          )}

        </div>
      </div>
    </div>
  );
}
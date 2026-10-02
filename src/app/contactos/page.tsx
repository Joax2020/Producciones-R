"use client";
import Link from "next/link";

export default function Construccion() {
  return (
    <div className="h-screen w-full bg-[#9e4a4a] overflow-hidden flex flex-col relative">
      
      {/* ── FONDO DESENFOCADO ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/carrusel1.jpg')`, // Puedes usar cualquier imagen de tu carrusel
            filter: "brightness(0.4) blur(6px)", // Oscuro y desenfocado para dar protagonismo al texto
          }}
        />
      </div>

      {/* ── CONTENIDO CENTRAL ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        
        <img
          src="/images/estrella.png"
          alt="★"
          className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl mb-6 animate-pulse"
        />
        
        <h1 className="text-white font-black text-3xl md:text-5xl lg:text-6xl tracking-widest uppercase drop-shadow-lg mb-4">
          Próximamente
        </h1>
        
        <p className="text-white/80 md:text-lg lg:text-xl max-w-lg mb-10 font-medium">
          Estamos trabajando en esta sección para traerte el mejor contenido. ¡Vuelve pronto!
        </p>
        
        <Link
          href="/"
          className="bg-[#cc0000] text-white font-bold text-xs md:text-sm py-3 px-8 rounded-lg hover:bg-red-700 transition-colors shadow-2xl tracking-widest uppercase hover:scale-105 transform"
        >
          Volver al Inicio
        </Link>
        
      </div>
    </div>
  );
}
// src/app/page.tsx
export default function EnConstruccion() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Fondo con imagen de concierto sutil */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      {/* Contenido Central */}
      <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
        {/* Logo */}
        <h1 className="font-black text-white uppercase tracking-tight leading-none text-5xl md:text-7xl drop-shadow-lg">
          PRODUCCIONES <span className="text-red-600">R</span><span className="text-red-600">★</span>
        </h1>
        <p className="text-yellow-400 font-bold tracking-widest text-sm md:text-lg">
          20 AÑOS • Queda la música...
        </p>

        <div className="w-24 h-1 bg-red-600 mx-auto my-8"></div>

        {/* Mensaje */}
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
          Sitio en Construcción
        </h2>
        <p className="text-gray-300 mx-auto text-lg mt-4 max-w-xl">
          Estamos preparando nuestra nueva experiencia. Muy pronto podrás conocer toda nuestra agenda, artistas y servicios.
        </p>

        {/* Botón de contacto */}
        <div className="pt-8">
          <a 
            href="mailto:quiqueclarosR@gmail.com" 
            className="bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-3 rounded uppercase tracking-wider transition-all duration-200 hover:scale-105 inline-block"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";

const servicios = [
  "Eventos culturales",
  "Management musical",
  "Booking musical",
  "Producción y postproducción discográfica",
  "Actividades de formación artística",
  "Comunicación",
  "Sello musical digital – QUMBRE MUSIC",
];

const aliados = ["Altafonte", "Orchard", "Par Mil", "Qumbre Music", "MMF Latam"];

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-zinc-900 pt-20">

      {/* HERO SECTION */}
      <section
        className="relative py-24 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1600&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
            Quiénes <span className="text-red-600">somos</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mt-4" />
        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="py-16 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Foto / logo placeholder */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-2xl bg-zinc-800 border-2 border-red-700 flex items-center justify-center">
              <div className="text-center">
                <p className="text-red-600 text-6xl font-black">R★</p>
                <p className="text-white text-sm mt-2 tracking-widest uppercase">
                  Logo aquí
                </p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <div className="inline-block bg-red-700 px-4 py-2 rounded">
              <h2 className="text-white font-black text-xl uppercase tracking-wide">
                Quiénes somos
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Producciones R★ es una empresa boliviana dedicada a la gestión y
              producción de eventos culturales y musicales con más de 20 años de
              trayectoria. Hemos sido parte de más de 300 conciertos desde 2006,
              trabajando con artistas nacionales e internacionales en distintos
              escenarios de Bolivia y el mundo.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Nuestro trabajo abarca desde la generación de la idea hasta la
              comunicación finalizado el evento: diseño escénico, gestión de
              espacios, coordinación institucional, producción técnica, montaje,
              hospitalidad, venta de entradas y registros audiovisuales.
            </p>

            <p className="text-gray-400 italic border-l-4 border-red-600 pl-4">
              Nuestra misión: conectar artistas y audiencias a través de
              experiencias culturales únicas. Nuestra visión: ser el referente
              de la producción musical en Bolivia y la región.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS LIST */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-2">
            Lo que hacemos
          </h2>
          <div className="w-16 h-1 bg-red-600 mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((s, i) => (
              <Link
                key={i}
                href="/servicios"
                className="group flex items-center gap-4 bg-zinc-900 hover:bg-red-700 border border-zinc-800 hover:border-red-600 rounded-xl px-6 py-4 transition-all duration-200"
              >
                <span className="text-red-500 group-hover:text-white text-2xl font-black">
                  ★
                </span>
                <span className="text-white font-semibold text-sm uppercase tracking-wide">
                  {s}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ALIADOS */}
      <section className="py-16 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-2">
            Nuestros aliados
          </h2>
          <div className="w-16 h-1 bg-red-600 mb-10" />

          <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
            {aliados.map((a, i) => (
              <div
                key={i}
                className="bg-zinc-800 border border-zinc-700 rounded-xl px-8 py-4 text-white font-bold tracking-widest uppercase text-sm hover:border-red-600 transition-colors"
              >
                {a}
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm mt-4">
            * Los logos reales irán aquí cuando estén disponibles
          </p>
        </div>
      </section>

    </div>
  );
}
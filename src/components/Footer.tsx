import Link from "next/link";

const redes = [
  {
    name: "Facebook",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="YouTube">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#FF0000" />
        <path d="M9.75 8.98v6.04l5.75-3.02-5.75-3.02z" fill="white" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full z-20 bg-transparent" style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
      <div
        className="flex items-center justify-end"
        style={{ paddingRight: "clamp(2rem, 5vw, 6rem)" }}
      >
        {/* Solo Redes Sociales */}
        <div className="flex gap-4">
          {redes.map((red) => (
            <Link
              key={red.name}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors duration-300 hover:scale-110 inline-block"
              title={red.name}
            >
              {red.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
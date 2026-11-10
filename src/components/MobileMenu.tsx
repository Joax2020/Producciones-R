"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { siteSocialLinks, type SiteNavLink } from "@/data/site";

export type MobileMenuVariant = "default" | "agenda";

interface MobileMenuProps {
  links: SiteNavLink[];
  variant?: MobileMenuVariant;
  className?: string;
}

const variantStyles = {
  default: {
    button: "bg-[#8b0000] text-white border border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.25)]",
    panel: "border border-white/10 bg-[#8b0000]/95 text-white",
    active: "border border-white/30 bg-white/12 text-white",
    inactive: "text-white/90 hover:bg-white/10 hover:text-white",
    separator: "border-white/10",
  },
  agenda: {
    button: "bg-[#cc0000] text-white border border-red-300/30 shadow-[0_10px_25px_rgba(204,0,0,0.25)]",
    panel: "border border-red-500/30 bg-[#090909]/95 text-white",
    active: "border border-red-500/60 bg-[#cc0000]/20 text-white",
    inactive: "text-white/85 hover:bg-white/5 hover:text-white",
    separator: "border-white/10",
  },
} as const;

export default function MobileMenu({
  links,
  variant = "default",
  className = "",
}: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const styles = variantStyles[variant] ?? variantStyles.default;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    return () => window.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className={`md:hidden ${className}`}>
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((value) => !value)}
        className={`relative inline-flex h-11 w-11 items-center justify-center rounded-lg transition-transform duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${styles.button}`}
      >
        <span className="sr-only">Menú</span>
        <span className="flex flex-col items-center justify-center gap-1.5">
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Cerrar panel del menú"
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        <div
          id="mobile-navigation-panel"
          ref={panelRef}
          className={`absolute inset-y-0 right-0 flex w-[82vw] max-w-[320px] flex-col justify-between overflow-hidden border-l p-5 pt-6 shadow-2xl transition-transform duration-300 ${styles.panel} ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-white/80">Menú</span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-col gap-2 pt-2">
              {links.map((link) => {
                const active = isActiveLink(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex min-h-[48px] items-center justify-between rounded-lg px-4 py-3 text-left text-base font-bold uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
                      active ? styles.active : styles.inactive
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    <span className="text-sm">›</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className={`border-t pt-4 ${styles.separator}`}>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">Síguenos</p>
            <div className="flex items-center gap-3">
              {siteSocialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

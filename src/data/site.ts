import { createElement, type ReactNode } from "react";

export type SiteNavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: ReactNode;
};

const svg = (props: Record<string, unknown>, children: ReactNode[]) =>
  createElement("svg", props, ...children);

export const siteSocialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/produccionesrbolivia",
    icon: svg(
      { viewBox: "0 0 24 24", fill: "currentColor", className: "h-5 w-5" },
      [createElement("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })],
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/produccionesrbolivia",
    icon: svg(
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        className: "h-5 w-5",
      },
      [
        createElement("rect", { x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 }),
        createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
        createElement("line", { x1: 17.5, y1: 6.5, x2: 17.51, y2: 6.5 }),
      ],
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@producciones.r",
    icon: svg(
      { viewBox: "0 0 24 24", fill: "currentColor", className: "h-5 w-5" },
      [createElement("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z" })],
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ProduccionRBolivia",
    icon: svg(
      {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "h-5 w-5",
        "aria-label": "YouTube",
      },
      [
        createElement("path", {
          d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
        }),
      ],
    ),
  },
];

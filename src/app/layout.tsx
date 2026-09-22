import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Importamos los pesos más importantes de la fuente Aktiv Grotesk
const aktivGrotesk = localFont({
  src: [
    {
      path: './fonts/AktivGrotesk-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/AktivGrotesk-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/AktivGrotesk-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/AktivGrotesk-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/AktivGrotesk-XBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/AktivGrotesk-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-aktiv', // Definimos una variable CSS para usarla en Tailwind
});

export const metadata: Metadata = {
  title: "Producciones R★",
  description: "Queda la música...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* Aplicamos la variable de la fuente al body */}
      <body className={`${aktivGrotesk.variable} font-sans flex min-h-screen flex-col bg-[#090909] text-white antialiased`}>
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
//import Navbar from "@/components/Navbar";

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
      <body className="flex min-h-screen flex-col bg-[#090909] text-white antialiased">
  <main className="flex flex-1 flex-col">{children}</main>
</body>
    </html>
  );
}
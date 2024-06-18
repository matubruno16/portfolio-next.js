import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Canvas from "./components/BackgroundStar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matias Bruno - Desarrollador Frontend Web | HTML, CSS, JavaScript, React.JS y Next.JS",
  description: "¡Hola! Soy Matias Bruno, un Desarrollador Frontend Junior apasionado por crear sitios web cautivadores y funcionales. Con habilidades sólidas en HTML, CSS y JavaScript, impulso la presencia en línea de tu negocio. Descubre cómo puedo mejorar tu presencia web hoy.",
  keywords: "Matias Bruno, Desarrollador Web, Desarrollador Frontend, HTML, CSS, JavaScript, React.JS, Next.JS, Sitios Web, Agencias Web, Desarrollo Web, Diseño Web",
  authors: [{ name: "Matias Bruno" }],
  robots: "index, follow",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body   className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        <Canvas />
        {children}
        <Footer />
        </body>
    </html>
  );
}

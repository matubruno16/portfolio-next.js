import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights }from "@vercel/speed-insights/react";
import Canvas from "./components/BackgroundStar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Matias Bruno - Desarrollador Web con Wordpress, React.JS y Next.JS",
  description:
    "Desarrollador web especializado en WordPress, React.js y Next.js. Crea sitios web rápidos, modernos y personalizados para mejorar tu presencia online.",
  keywords:
    "Matias Bruno, Desarrollador Web, Desarrollador Frontend, HTML, CSS, JavaScript, React.JS, Next.JS, Sitios Web, Agencias Web, Desarrollo Web, Diseño Web",
  authors: [{ name: "Matias Bruno" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://matiasbrunodev.vercel.app",
  },
  category: "desarrollo web, aplicaciones web, diseños web",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <Canvas />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}

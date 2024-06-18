import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      className="flex flex-col items-center justify-center py-20"
      id="proyectos"
    >
      <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-2 xl:grid-cols-3 place-content-center justify-items-center  ">
        <ProjectCard
          url="https://memoriastudio.net"
          src="/home-memoriaStudio.webp"
          title="Memoria Studio"
          description="Sitio Web desarrollado en Next.js con Blog con CMS de Contentful"
          skills={["React", "Next.js", "Contentful", "Tailwind CSS"]}
        />
        <ProjectCard
          url="https://trekkingenargentina.vercel.app"
          src="/home-trekking.webp"
          title="Trekking"
          description="Blog de trekking en Argentina con React, Parallax y Tailwind CSS "
          skills={["React", "Tailwind CSS", "Parallax"]}
        />
        <ProjectCard
          url="https://boutiquedehebras.com.ar"
          src="/home-boutique.webp"
          title="Boutique de Hebras"
          description="Tienda E-commerce en Wordpress y Woocommerce"
          skills={["Wordpress", "Woocommerce"]}
        />
        <ProjectCard
          url="https://dolarhoyargentina.vercel.app/"
          src="/home-dolar-hoy.webp"
          title="Dólar Hoy"
          description="Cotización de Dólar y otras divisas en vivo"
          skills={["React", "Tailwind CSS", "API"]}
        />
      </div>
    </section>
  );
}

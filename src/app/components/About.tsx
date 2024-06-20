/* eslint-disable @next/next/no-img-element */

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 px-6"
      id="sobre-mi"
    >
      <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        Sobre Mi
      </h2>
      <div className="md:grid md:grid-cols-2">
        
          <div className=" flex flex-col justify-center items-center ">
            <img
              className="w-[300px] rounded bg-cover object-cover"
              src={"/fotoMatias.png"}
              alt="Foto Matias Bruno"
              loading="lazy"
            />
            <div className="flex gap-6 items-center">
              <p className="mt-4">
                <span className="font-bold text-lg">Nombre:</span> Matias Bruno
              </p>
              <h2 className="mt-4">
                <span className="font-bold text-lg">Perfil:</span> FrontEnd
              </h2>
            </div>
              <a
                className=" w-min text-nowrap rounded-3xl py-1.5 px-3 my-4 border border-[#7042f88b] opacity-[0.9] text-gray-200"
                href="https://drive.google.com/file/d/1ykuyVK8UNKyGHau7B1Y5OJAeLnu4Q_Ks/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                title="Boton de descarga de Curriculum Vitae"
              >
                Descargar CV
              </a>
          </div>  
        
        <div className="max-w-[650px]">
          <p className="p-4 mb-[-10px] text-lg font-light  text-pretty">
            Soy un apasionado del Desarrollo Web Full Stack y actualmente estoy
            ampliando mis conocimientos mediante la Tecnicatura Universitaria en
            Desarrollo de Aplicaciones Informáticas en la Universidad Nacional
            del Centro de la Provincia de Buenos Aires.
          </p>
          <p className="p-4 mb-[-10px] text-lg font-light text-pretty ">
            Esa misma curiosidad me motivó a profundizar en el desarrollo de
            tecnologías, aprendiendo de forma autodidacta y constante, lo que me
            permitió dar mis primeros pasos como profesional.
          </p>
          <p className="p-4 mb-[-10px] text-lg font-light text-pretty">
            Estoy emocionado por contribuir al éxito de nuevos proyectos. Estoy
            convencido de que mi habilidad para colaborar y mi enfoque proactivo
            son activos valiosos para cualquier equipo de desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
}

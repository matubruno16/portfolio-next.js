/* eslint-disable @next/next/no-img-element */

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 px-10"
      id="sobre-mi"
    >
      <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        Sobre Mi
      </h2>
      <div className="md:grid md:grid-cols-2">
        <div className="">
          <div className="md:flex md:justify-center  ">
            <img
              className="w-60 max-md:mx-auto md:w-40 rounded bg-cover max-w-[100%] object-cover"
              src={"/home-fondo.webp"}
              alt="Foto Matias Bruno"
            />
            <div className="flex flex-col justify-center items-center md:ml-10 md:items-start ">
              <p className="mt-4">
                <span className="font-bold text-lg">Nombre:</span> Matias Bruno
              </p>
              <h2 className="mt-4">
                <span className="font-bold text-lg">Perfil:</span> FrontEnd
              </h2>
              <a
                className=" w-min text-nowrap rounded-3xl py-1.5 px-3 mt-3 md:ml-6 border border-[#7042f88b] opacity-[0.9] text-gray-200"
                href="https://drive.google.com/file/d/1UEcqIIGODOUBhsoBq5jav2kCdNwWYBaR/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                title="Boton de descarga de Curriculum Vitae"
              >
                Descargar CV
              </a>
            </div>
          </div>
          <div>
            <div className="my-10">
              <p className="text-xl mt-8 font-bold text-center">Skills</p>
              <div className="grid grid-cols-3  justify-items-center mt-8 gap-4 sm:w-[50%] mx-auto [&>img]:aspect-square [&>img]:object-contain [&>img]:w-[80px] ">
                <img src={"/html5.svg"} alt="Logo HTML" />
                <img src={"/css.svg"} alt="Logo CSS" />
                <img src={"/tailwind.svg"} alt="Logo Wordpress" />
                <img src={"/javascript.svg"} alt="Logo Javascript" />
                <img src={"/react.svg"} alt="Logo React JS" />
                <img src={"/next.svg"} alt="Logo MySQL" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[650px]">
          <p className="p-4 mb-[-10px] text-xl font-light  text-pretty">
            Soy un apasionado del Desarrollo Web Full Stack y actualmente estoy
            ampliando mis conocimientos mediante la Tecnicatura Universitaria en
            Desarrollo de Aplicaciones Informáticas en la Universidad Nacional
            del Centro de la Provincia de Buenos Aires.
          </p>
          <p className="p-4 mb-[-10px] text-xl font-light text-pretty ">
            Esa misma curiosidad me motivó a profundizar en el desarrollo de
            tecnologías, aprendiendo de forma autodidacta y constante, lo que me
            permitió dar mis primeros pasos como profesional.
          </p>
          <p className="p-4 mb-[-10px] text-xl font-light text-pretty">
            Estoy emocionado por contribuir al éxito de nuevos proyectos. Estoy
            convencido de que mi habilidad para colaborar y mi enfoque proactivo
            son activos valiosos para cualquier equipo de desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
}

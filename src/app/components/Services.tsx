import { MagicCard, MagicContainer } from "./MagicCard";

export default function Services() {
  return (
    <section id="servicios" className="flex flex-col items-center justify-center pt-20 pb-10">
      <div>
        <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
          Servicios
        </h2>
      </div>
      <MagicContainer
        className={
          "flex w-full max-w-[1440px] flex-col gap-6 lg:flex-row px-6 md:px-20 lg:p-6"
        }
      >
        <MagicCard
          borderWidth={3}
          className="flex w-full cursor-pointer flex-col items-center justify-start overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-10 shadow-2xl"
        >
          <header>
            <h3 className="z-10 whitespace-nowrap text-4xl font-medium text-gray-200 pb-4">
              Wordpress
            </h3>
          </header>

          <p className="">
            Potencie su presencia digital con soluciones web de última
            generación en WordPress. Desarrollamos sitios web personalizados que
            reflejan la excelencia de su negocio. Además, ofrecemos servicios
            integrales de mantenimiento web para garantizar un rendimiento
            continuo y confiable. Nuestro equipo también se especializa en
            optimización SEO para mejorar su visibilidad en los motores de
            búsqueda. Aumente su impacto en línea con nuestra experiencia.
            Mejore su posicionamiento digital con nuestros servicios
            especializados.
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-10 shadow-2xl">
          <header>
            <h3 className="z-10 whitespace-nowrap text-4xl font-medium text-gray-200 pb-4">
              Next.js
            </h3>
          </header>
          <p>
            Transforme su presencia en línea con aplicaciones web modernas y de
            alto rendimiento desarrolladas en React con Next.js. Creamos
            soluciones a medida que destacan por su velocidad, escalabilidad y
            experiencia de usuario superior. Confíe en nuestra experiencia para
            ofrecerle una plataforma robusta y adaptable a las necesidades
            específicas de su negocio. Eleve su impacto digital con tecnología
            de vanguardia y soporte continuo. Potencie su presencia en línea y
            gane ventaja competitiva con React y Next.js
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-10 shadow-2xl">
          <header>
            <h3 className="z-10 whitespace-nowrap text-4xl font-medium text-gray-200 pb-4">
              Diseño UX/UI
            </h3>
          </header>
          <p>
            Eleve la experiencia de usuario de su sitio web con nuestro servicio
            especializado de diseño UX/UI. Creamos interfaces intuitivas y
            atractivas que no solo captan la atención de sus usuarios, sino que
            también mejoran su satisfacción y fidelidad. Con un enfoque centrado
            en el usuario, diseñamos soluciones de diseño web que garantizan una
            navegación fluida y una interacción eficiente. Potencie su presencia
            digital con un diseño web que marca la diferencia y mejore la
            usabilidad de su plataforma con diseño UX/UI innovador.
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    </section>
  );
}

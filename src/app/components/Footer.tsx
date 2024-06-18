/* eslint-disable @next/next/no-img-element */
import { socialLinks } from "../utils/socialLinks";
import { Dock, DockIcon } from "./Dock";

export default function Footer() {
  return (
    <footer className="w-full h-full backdrop-blur-sm py-10 bg-[#7042f8]/10 text-gray-200 shadow-lg  ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <Dock className="relative">
          {socialLinks.map((link) => (
            <DockIcon key={link.name}>
              <a href={link.url} target="_blank" rel="noreferrer" title={`Icono de ${link.name}`}>
                <img src={link.icon} alt={`Icono de ${link.name}` } />
              </a>
            </DockIcon>
          ))}
        </Dock>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-5 ">
        <h3>© 2024 Todos los derechos reservados</h3>
      </div>
    </footer>
  );
}

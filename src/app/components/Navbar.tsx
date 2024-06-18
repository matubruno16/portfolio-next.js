"use client";
import Image from "next/image";
import { useState } from "react";
import IconMenu from "./IconMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between gap-4 m-auto px-[10px]">
        <a href="#" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={40}
            className=""
          />
        </a>

        <div className="w-[500px] h-full hidden md:flex flex-row items-center justify-between ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#proyectos"
              className="cursor-pointer hover:scale-105 transition ease-in-out"
            >
              Proyectos
            </a>
            <a
              href="#sobre-mi"
              className="cursor-pointer hover:scale-105 transition ease-in-out"
            >
              Sobre Mi
            </a>
            <a
              href="#servicios"
              className="cursor-pointer hover:scale-105 transition ease-in-out"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="cursor-pointer hover:scale-105 transition ease-in-out"
            >
              Contacto
            </a>
          </div>
        </div>
        <div className="hidden md:block w-[150px]"></div>
        <div className="block md:hidden z-10">
          <div className="z-50">
            <IconMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
          {isMenuOpen && (
            <div
              className={`fixed mt-16 w-full bg-[#030014]  text-gray-200 md:hidden origin-top top-0 left-0 duration-700 ${
                isMenuOpen ? "h-screen py-10" : "h-0"
              }`}
            >
              <ul className="w-full h-full flex flex-col items-center justify-start pt-32 gap-12 text-5xl font-semibold">
                <li>
                  <a
                    href="#proyectos"
                    className="cursor-pointer hover:scale-105 transition ease-in-out"
                    onClick={toggleMenu}
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre-mi"
                    className="cursor-pointer hover:scale-105 transition ease-in-out"
                    onClick={toggleMenu}
                  >
                    Sobre Mi
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="cursor-pointer hover:scale-105 transition ease-in-out"
                    onClick={toggleMenu}
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="cursor-pointer hover:scale-105 transition ease-in-out"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

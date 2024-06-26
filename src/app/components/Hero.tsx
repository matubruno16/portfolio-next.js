"use client";

import { motion } from "framer-motion";
import { fromLeft, fromRight, fromTop } from "../utils/motion";
import { GlobelIcons } from "./GlobeIcons";
export default function Hero() {
  return (
    <section className="w-full h-full max-w-[1600px] mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center px-6 md:px-20 mt-32 md:mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center max-md:items-center m-auto">
          <motion.div
            variants={fromTop}
            className="flex flex-col gap-6 mt-6 text-5xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto text-center md:text-start "
          >
            <h2>
              Asegurando
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  text-nowrap text-center md:text-start ">
                {" "}
                la excelencia{" "}
              </span>
              en cada proyecto
            </h2>
          </motion.div>

          <motion.p
            variants={fromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px] text-center md:text-start "
          >
            Me especializo en la elegancia, diseño y funcionalidad de sitios
            web. Actualmente, soy estudiante de desarrollo de aplicaciones
            informáticas en La Universidad Nacional del Centro de la Provincia
            de Buenos Aires.
          </motion.p>
          <motion.div
            variants={fromLeft(1)}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <h1 className="Welcome-text text-[13px]">
              Desarrollador Web FrontEnd
            </h1>
          </motion.div>
        </div>

        <motion.div
          variants={fromRight(0.8)}
          className="w-full h-full hidden md:flex justify-center items-center  "
        >
          <GlobelIcons />
        </motion.div>
      </motion.div>
    </section>
  );
}

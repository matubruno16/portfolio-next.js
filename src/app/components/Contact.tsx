"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../api/sendEmail";
import { userShemaContact } from "../utils/userShemaContact";
import ModalContact from "./ModalContact";

type Inputs = {
  name: string;
  subject: string;
  email: string;
  message: string;
};
export default function Contact() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(userShemaContact) });

  const formEmail = useRef<HTMLFormElement>(null);
  const handleSubmitEmail = async (data: Inputs) => {
    try {
      await sendEmail(data);
      setMostrarMensaje(true);
      reset();
      console.log(data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      className="flex flex-col items-center justify-center pt-10 pb-20 md:pt-10  md:px-10"
      id="contacto"
    >
      <h2 className="text-5xl font-semibold py-10 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500 ">
        Contactanos
      </h2>
      <form
        ref={formEmail}
        onSubmit={handleSubmit(handleSubmitEmail)}
        method="post"
        className="w-full md:w-[650px] z-0 mx-auto bg-MSWhite px-6 "
      >
        <div className="flex flex-col justify-center gap-4 ">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full">
              <label
                htmlFor="name"
                className="flex ml-2 mb-2 text-xl font-bold leading-snug w-full after:content-['*'] after:ml-0.5 after:text-red-500 after:text-sm "
              >
                Nombre
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                className="w-full h-10 rounded-3xl py-1 px-2 pl-4 border border-[#7042f88b] opacity-[0.9] text-gray-200 backdrop-blur-sm bg-[#7042f8]/10"
                placeholder="Homero J. Simpsons"
              />
              {errors.name?.message && (
                <p className="text-red-500 pl-2">{errors.name?.message}</p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="flex ml-2 mb-2 text-xl font-bold leading-snug w-full after:content-['*'] after:ml-0.5 after:text-red-500 after:text-sm "
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                id="email"
                name="email"
                className="w-full h-10 rounded-3xl py-1 px-2 pl-4 border border-[#7042f88b] opacity-[0.9] text-gray-200 backdrop-blur-sm bg-[#7042f8]/10 "
                placeholder="example@example.com"
              />
              {errors.email?.message && (
                <p className="text-red-500 pl-2">{errors.email?.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="flex ml-2 mb-2 text-xl font-bold leading-snug w-full after:content-['*'] after:ml-0.5 after:text-red-500 after:text-sm "
            >
              Asunto
            </label>
            <input
              {...register("subject", { required: true })}
              type="text"
              id="subject"
              name="subject"
              className="w-full h-10 rounded-3xl py-1 px-2 pl-4 border border-[#7042f88b] opacity-[0.9] text-gray-200 backdrop-blur-sm bg-[#7042f8]/10"
              placeholder="Desarrollo Web"
            />
            {errors.subject?.message && (
              <p className="text-red-500 pl-2">{errors.subject?.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="flex  ml-2 mb-2 md:text-xl font-bold leading-snug w-full "
            >
              ¿En que podemos ayudarte?
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              name="message"
              className="w-full h-[120px] rounded-3xl py-2 px-2 pl-4 border border-[#7042f88b] opacity-[0.9] text-gray-200 backdrop-blur-sm bg-[#7042f8]/10"
              placeholder="Escriba su mensaje aquí"
            />
            {errors.message?.message && (
              <p className="text-red-500 pl-2">{errors.message?.message}</p>
            )}
            <p className="text-red-500 text-sm pl-6">*Campos requeridos</p>
          </div>

          <div className="flex justify-center items-center gap-4 w-full">
            <button
              type="submit"
              className="button-send w-40 flex items-center justify-center text-lg capitalize bg-MSIndigo  text-MSWhite h-10 rounded-3xl py-1 px-2 pl-4 border border-[#7042f88b] opacity-[0.9] text-gray-200 backdrop-blur-sm bg-[#7042f8]/10"
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Enviar</span>
            </button>
          </div>
        </div>
      </form>
      {mostrarMensaje && <ModalContact setMostrarMensaje={setMostrarMensaje} />}
    </section>
  );
}

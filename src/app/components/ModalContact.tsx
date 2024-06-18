"use client";
import { useEffect } from "react";

export default function ModalContact({ setMostrarMensaje }: any) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMostrarMensaje(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [setMostrarMensaje]);
  return (
    <div className="fixed inset-0 w-screen h-screen backdrop-blur-sm bg-MSGray/40 ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 px-4 rounded-md border-l-4 border-[#7042f8] bg-[#E9E2FF] md:max-w-2xl md:mx-auto md:px-8">
        <div className="flex justify-between py-3">
          <div className="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rounded-full"
                viewBox="0 0 20 20"
                fill="#7042f8"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="self-center ml-3">
              <span className="text-[#2A1669] font-semibold uppercase">
                Enviado correctamente
              </span>
              <p className="text-[#2A1669] mt-1">
                Nos pondremos en contacto con usted lo antes posible!
              </p>
            </div>
          </div>
          <button
            onClick={() => setMostrarMensaje(false)}
            className="self-start text-[#7042f8]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#7042f8"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { socialLinks } from "../utils/socialLinks";

export default function Footer() {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
      
          {socialLinks.map((social) => (
            <a
              href={social.url}
              key={social.name}
              className="cursor-pointer flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={social.icon}
                alt={`Icono red social ${social.name}`}
                width={40}
                height={40}
              />
              {social.name}
            </a>
          ))}
              
      </div>
    </footer>
  );
}

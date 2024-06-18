import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.webp"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#sobre-mi"
              className="cursor-pointer hover:scale-105 transition ease-in-out"
            >
              Sobre Mi
            </a>
            <a
              href="#certificaciones"
              className="cursor-pointer hover:scale-105 transition ease-in-out"
            >
              Certificaciones
            </a>
            <a
              href="#proyectos"
              className="cursor-pointer hover:scale-105 transition ease-in-out"
            >
              Proyectos
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a
            className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 group"
            href="mailto:matubruno16@gmail.com"
          >
            <span className="group-hover:scale-105 transition ease-in-out">
              Contacto
            </span>
          </a>
          {/* {socialLinks.map((social) => (
            <a href={social.url} key={social.name} className="cursor-pointer" target="_blank" rel="noreferrer" >
              <Image 
                src={social.icon} 
                alt={`Icono red social ${social.name}`}
                width={30}
                height={40} />
            
            </a>
             
          ))}*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="text-center flex-row align-baseline justify-center">
          <span className="text-1xl md:text-2xl font-semibold align-baseline justify-center">
            Janugopan S
          </span>
        </div>
        <Image
          src="/images/logo1.png"
          alt="Logo"
          className="h-10 w-10 md:h-15 md:w-15 lg:h-20 lg:w-20"
          width={100}
          height={100}
        ></Image>
      </div>
    </footer>
  );
};

export default Footer;

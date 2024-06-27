import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-20 text-white flex-center bg-primary-500">

      <div className="flex flex-col gap-5 text-center flex-center sm:flex-row flex-between wrapper">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38} 
          />
        </Link>

        <p>&copy; 2024 All rights reserved</p>
      </div>
      
    </footer>
  );
};

export default Footer;

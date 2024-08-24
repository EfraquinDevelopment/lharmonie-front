import { Logo } from "@/components/logo";
import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white py-10">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Logo invert clickable={false} />
          <p className="text-sm text-gray-300">
            Descubre la armonía en cada taza
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-sm text-gray-300 hover:text-white">
              Inicio
            </Link>
            <Link
              href="/tienda"
              className="text-sm text-gray-300 hover:text-white"
            >
              Tienda
            </Link>
            <Link
              href="/menu"
              className="text-sm text-gray-300 hover:text-white"
            >
              Menú
            </Link>
            <Link
              href="/locales"
              className="text-sm text-gray-300 hover:text-white"
            >
              Locales
            </Link>
            <Link
              href="/sobre-nosotros"
              className="text-sm text-gray-300 hover:text-white"
            >
              Sobre Nosotros
            </Link>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>
          <address className="text-sm text-gray-300 not-italic">
            <p>Email: info@lharmonie.com</p>
            <p>Teléfono: +1 234 567 890</p>
            <div className="mt-4 flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

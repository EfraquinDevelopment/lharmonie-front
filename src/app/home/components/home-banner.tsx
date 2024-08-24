import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBanner = () => {
  return (
    <section className="h-[calc(100vh-4rem)] flex items-center justify-center bg-[#F5F5F0] text-[#232323] relative">
      <div className="text-center">
        <Image
          src="/lharmonie-logo.png"
          alt="Lharmonie Logo"
          width={300}
          height={100}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Descubre la armonía en cada taza
        </h1>
        <p className="text-xl mb-8">
          Bienvenido a Lharmonie, donde el café se convierte en una experiencia
          única
        </p>
        <Button>
          <Link href="/menu">Ver Nuestro Menú</Link>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#232323] to-transparent"></div>
    </section>
  );
};

export default HomeBanner;

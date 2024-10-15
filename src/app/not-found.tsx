import React from "react";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import Heading from "@/components/layout/heading";

export default function NotFound() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#f8f8f5] to-[#e0d8c9]">
      <section className="flex h-screen flex-col items-center justify-center p-4 sm:p-8">
        <div className="text-center max-w-xl mx-auto">
          <div className="mb-12">
            <Heading level={1} className="text-6xl sm:text-7xl mb-6 font-serif">
              404
            </Heading>
            <Heading
              level={2}
              className="text-2xl sm:text-3xl mb-8 font-serif font-normal"
            >
              Página no encontrada
            </Heading>
            <p className=" text-lg block mb-12">
              Lo sentimos, la página que buscas no está disponible.
            </p>
          </div>

          <Link href="/" passHref>
            <Button
              type="primary"
              icon={<HomeOutlined />}
              size="large"
              className="bg-[#8B7355] hover:!bg-[#A08B6C] border-none h-14 px-8 text-lg font-light tracking-wide transition-all shadow-md"
            >
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

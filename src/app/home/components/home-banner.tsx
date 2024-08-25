import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import LharmonieButton from "@/components/ui/lharmonie-button";

const HomeBanner = () => {
  const { homeBanner } = content;

  return (
    <section className="h-[calc(100vh-4rem)] flex items-center justify-center bg-lharmonie-primary text-lharmonie-secondary relative">
      <div className="text-center md:px-0 px-4">
        <Image
          src="/lharmonie-logo.png"
          alt="Lharmonie Logo"
          width={300}
          height={100}
          className="mx-auto mb-8"
        />
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          {homeBanner.title}
        </h1>
        <p className="text-lg md:text-xl mb-8">{homeBanner.description}</p>
        <LharmonieButton>
          <Link href="/menu">{homeBanner.buttonText}</Link>
        </LharmonieButton>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-lharmonie-secondary to-transparent"></div>
    </section>
  );
};

export default HomeBanner;

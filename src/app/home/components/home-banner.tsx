import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import LharmonieButton from "@/components/ui/lharmonie-button";
import Heading from "@/components/layout/heading";

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
        <Heading level={1} className="md:!text-5xl !font-bold">
          {homeBanner.title}
        </Heading>
        <p className="text-lg md:text-xl mt-4 mb-8">{homeBanner.description}</p>
        <LharmonieButton>
          <Link href="/menu">{homeBanner.buttonText}</Link>
        </LharmonieButton>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-lharmonie-secondary to-transparent"></div>
    </section>
  );
};

export default HomeBanner;

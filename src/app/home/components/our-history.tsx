import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import content from "@/data/home.json";

const OurHistory = () => {
  const { ourHistory } = content;

  return (
    <section className="py-16 w-full bg-[#F5F5F0]">
      <div className="px-4 container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-[#232323]">
              {ourHistory.title}
            </h2>
            {ourHistory.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg mb-4 text-[#232323]">
                {paragraph}
              </p>
            ))}
            <Button>
              <Link href="/sobre-nosotros">{ourHistory.buttonText}</Link>
            </Button>
          </div>
          <div className="flex justify-end">
            <Image
              src={ourHistory.imageSrc}
              alt={ourHistory.imageAlt}
              width={500}
              height={500}
              className="rounded-lg flex-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;

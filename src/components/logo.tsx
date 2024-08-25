import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  clickable?: boolean;
  invert?: boolean;
}

export const Logo = ({ clickable = true, invert = false }: Props) => {
  return (
    <>
      {clickable ? (
        <Link href="/" className="h-16 flex items-center">
          <Image
            src="/lharmonie-logo.png"
            alt="Lharmonie Logo"
            width={120}
            height={64}
            className={`h-full w-auto ${invert ? "filter invert" : ""}`}
          />
        </Link>
      ) : (
        <div className="h-16 flex items-center">
          <Image
            src="/lharmonie-logo.png"
            alt="Lharmonie Logo"
            width={120}
            height={64}
            className={`h-full w-auto ${invert ? "filter invert" : ""}`}
          />
        </div>
      )}
    </>
  );
};

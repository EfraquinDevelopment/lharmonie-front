import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  clickable?: boolean;
  invert?: boolean;
  size?: "default" | "large";
}

export const Logo = ({
  clickable = true,
  invert = false,
  size = "default",
}: Props) => {
  const textColor = invert
    ? "text-lharmonie-primary"
    : "text-lharmonie-secondary";

  return (
    <div>
      {clickable ? (
        <Link
          href="/"
          className={classNames("flex items-center text-2xl", {
            "md:text-3xl": size === "default",
            "text-5xl md:text-9xl": size === "large",
          })}
        >
          <p className={textColor}>Lharmonie</p>
        </Link>
      ) : (
        <div
          className={classNames("flex items-center text-2xl", {
            "text-2xl": size === "default",
            "text-5xl md:text-9xl": size === "large",
          })}
        >
          <p className={textColor}>Lharmonie</p>
        </div>
      )}
    </div>
  );
};

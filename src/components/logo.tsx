import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Heading from "./layout/heading";

interface Props {
  clickable?: boolean;
  size?: "default" | "large";
  color?: string;
}

export const Logo = ({ clickable = true, size = "default" }: Props) => {
  return (
    <div className="">
      {clickable ? (
        <Link href="/">
          <Heading
            className={classNames("flex flex-col items-center !mb-0", {
              "!text-2xl md:!text-3xl": size === "default",
              "md:!text-9xl": size === "large",
            })}
            level={1}
          >
            Lharmonie
          </Heading>
        </Link>
      ) : (
        <div>
          <Heading
            level={1}
            className={classNames("flex items-center", {
              "!text-2xl": size === "default",
              "md:!text-9xl": size === "large",
            })}
          >
            Lharmonie
          </Heading>
        </div>
      )}
    </div>
  );
};

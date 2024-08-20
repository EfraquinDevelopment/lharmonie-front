import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className="text-xl font-medium text-lharmonie-secondary">
      <Link href="/home" className="hover:text-inherit">
        Lharmonie
      </Link>
    </div>
  );
};

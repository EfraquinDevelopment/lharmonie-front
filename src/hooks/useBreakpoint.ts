import { TAILWIND_BREAKPOINTS } from "@/lib/constants";
import { useState, useEffect } from "react";

const breakpoints = TAILWIND_BREAKPOINTS;

const useBreakpoint = () => {
  const [isSm, setIsSm] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isXl, setIsXl] = useState(false);
  const [is2xl, setIs2xl] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setIsSm(width >= breakpoints.sm);
      setIsMd(width >= breakpoints.md);
      setIsLg(width >= breakpoints.lg);
      setIsXl(width >= breakpoints.xl);
      setIs2xl(width >= breakpoints["2xl"]);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isSm, isMd, isLg, isXl, is2xl };
};

export default useBreakpoint;

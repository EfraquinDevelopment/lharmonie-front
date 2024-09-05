import { TAILWIND_BREAKPOINTS } from "@/lib/constants";
import { useState, useEffect } from "react";

export const getBreakpointsWithoutPx = (): Record<string, number> => {
  return Object.entries(TAILWIND_BREAKPOINTS).reduce((acc, [key, value]) => {
    acc[key] = parseInt(value, 10);
    return acc;
  }, {} as Record<string, number>);
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("");
  const breakpoints = getBreakpointsWithoutPx();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < breakpoints.sm) {
        setBreakpoint("xs");
      } else if (width >= breakpoints.sm && width < breakpoints.md) {
        setBreakpoint("sm");
      } else if (width >= breakpoints.md && width < breakpoints.lg) {
        setBreakpoint("md");
      } else if (width >= breakpoints.lg && width < breakpoints.xl) {
        setBreakpoint("lg");
      } else if (width >= breakpoints.xl && width < breakpoints["2xl"]) {
        setBreakpoint("xl");
      } else {
        setBreakpoint("2xl");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { breakpoint, breakpoints };
};

export default useBreakpoint;

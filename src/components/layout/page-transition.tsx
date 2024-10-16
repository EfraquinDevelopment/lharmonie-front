import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const isHome = pathname === "/home" || pathname === "/";

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={pathname}
            className="bg-lharmonie-secondary"
            initial={{ translateX: "0%" }}
            animate={{ translateX: "100%" }}
            exit={{ translateX: "100%" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default PageTransition;

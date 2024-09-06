"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/layout/loader";
import { usePathname } from "next/navigation";
import PageTransition from "@/components/layout/page-transition";
import { ChevronUp } from "lucide-react";
import ScrollTopButton from "@/components/layout/scroll-top-button";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  if (pathname === "/home" || pathname === "/") {
    return (
      <div className="flex flex-col relative min-h-screen">
        <AnimatePresence>
          {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
        </AnimatePresence>
        {!loading && (
          <>
            <Header />
            <motion.main
              className="flex-grow w-full mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.main>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Footer />
            </motion.div>
          </>
        )}
        <ScrollTopButton />
      </div>
    );
  }

  return (
    <div className="flex flex-col relative min-h-screen">
      <Header />
      <PageTransition>
        <main className="flex-grow w-full mx-auto">{children}</main>
      </PageTransition>
      <Footer />
      <ScrollTopButton />
    </div>
  );
};

export default AppLayout;

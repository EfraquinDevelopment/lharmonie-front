"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ReactNode, Suspense, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/layout/loader";
import { usePathname } from "next/navigation";
import ScrollTopButton from "@/components/layout/scroll-top-button";
import PageTransition from "@/components/layout/page-transition";
import SpinnerLoader from "@/components/layout/spinner-loader";

type AppLayoutProps = {
  children: ReactNode;
};

const MainLayoutContent = ({ children }: AppLayoutProps) => {
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <PageTransition>
        <Header />
        <main className="flex-grow w-full mx-auto">{children}</main>
        <Footer />
        <ScrollTopButton />
      </PageTransition>
    </Suspense>
  );
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/home" || pathname === "/";

  if (isHome) {
    return (
      <div className="flex flex-col relative min-h-screen">
        <AnimatePresence>
          {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
        </AnimatePresence>
        {!loading && <MainLayoutContent>{children}</MainLayoutContent>}
      </div>
    );
  }

  return (
    <div className="flex flex-col relative min-h-screen">
      <MainLayoutContent>{children}</MainLayoutContent>
    </div>
  );
};

export default AppLayout;

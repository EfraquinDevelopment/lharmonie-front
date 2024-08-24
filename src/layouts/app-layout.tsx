import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex flex-col relative min-h-screen">
        <Header />
      <main className="flex-grow w-full mx-auto">
        {children}
      </main>
     <Footer />
    </div>
  );
};

export default AppLayout;



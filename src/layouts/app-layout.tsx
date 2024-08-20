import Header from "@/components/layout/header";
import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full">
        <Header />
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="w-full bg-lharmonie-secondary text-lharmonie-primary text-center p-4">
        © 2024 MyApp. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default AppLayout;



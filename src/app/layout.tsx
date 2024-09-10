import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/layouts/app-layout";
import { CartProvider } from "@/context/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lharmonie",
  description: "Descubre la armonía en cada taza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <AppLayout>{children}</AppLayout>
        </CartProvider>
      </body>
    </html>
  );
}

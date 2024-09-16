import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/layouts/app-layout";
import { CartProvider } from "@/context/cart-context";
import { getWooCategories } from "@/data/woocommerce/getWooCategories";
import { CategoriesProvider } from "@/context/categories-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lharmonie",
  description: "Descubre la armonía en cada taza",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getWooCategories();

  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <CategoriesProvider categories={categories}>
            <AppLayout>{children}</AppLayout>
          </CategoriesProvider>
        </CartProvider>
      </body>
    </html>
  );
}

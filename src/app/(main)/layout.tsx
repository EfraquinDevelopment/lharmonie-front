import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AppLayout from "@/layouts/app-layout";
import { CartProvider } from "@/context/cart-context";
import { getWooCategories } from "@/data/woocommerce/getWooCategories";
import { CategoriesProvider } from "@/context/categories-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description:
    "Descubre lharmonie, la cafetería en Buenos Aires donde cada taza de café es una experiencia única. Ven a disfrutar de nuestro ambiente acogedor, pastelería artesanal y bebidas especiales.",
  keywords:
    "café Buenos Aires, cafetería, lharmonie, café artesanal, pastelería, café especial, ambiente acogedor, tienda, libros, libros de cafe, merchandising, café en grano, café molido, café en caps, hacer cafe, palermo, buenos aires, kosher, kosher café, kosher buenos aires",
  openGraph: {
    title: "Lharmonie Café | La Experiencia de Café en Buenos Aires",
    description:
      "Visita Lharmonie Café en Buenos Aires y disfruta de una experiencia única de café, pastelería artesanal y un ambiente acogedor.",
    url: "https://casalharmonie.com",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lharmonie Café | La Experiencia de Café en Buenos Aires",
    description:
      "Un espacio donde cada taza de café es una invitación a la armonía y el sabor. Descubre lharmonie en Buenos Aires.",
  },
  alternates: {
    canonical: "https://casalharmonie.com",
  },
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

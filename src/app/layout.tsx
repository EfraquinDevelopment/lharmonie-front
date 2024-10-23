import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

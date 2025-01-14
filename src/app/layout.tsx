import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Essencial React",
  description:
    "Projecto pratico para colocar em pratica os conhecimentos adquiridos sobre React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}

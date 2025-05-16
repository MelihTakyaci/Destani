import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Destani",
  description: "Details machen den Unterschied, der Unterschied macht Perfektion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

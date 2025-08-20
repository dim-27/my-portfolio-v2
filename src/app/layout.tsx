import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar/navbar";
import { headingFontItalic, headingFontRegular, primaryFont } from "@/lib/font";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dimas Firmanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${primaryFont.variable}${headingFontItalic.variable}${headingFontRegular.variable}`}>
      <body
        className={`${primaryFont.className} w-full min-h-screen`}
        > 
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar/navbar";
import { headingFontItalic, headingFontRegular, primaryFont } from "@/lib/font";
import Footer from "@/components/ui/footer/footer";
import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  title: "Dimas Firmanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${primaryFont.variable}${headingFontItalic.variable}${headingFontRegular.variable} scroll-smooth`}>
      <body
        className={`${primaryFont.className} w-full min-h-screen`}
        >
        <Navbar/>
        {children}  
        <Footer/>
      </body>
    </html>
  );
}

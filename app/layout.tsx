import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const montserrat = Montserrat({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hasitha Jayasundara",
  description: "Hasitha Jayasundara Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-light text-dark`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

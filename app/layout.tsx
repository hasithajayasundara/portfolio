import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

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
        className={`${montserrat.variable} font-sans antialiased bg-light`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

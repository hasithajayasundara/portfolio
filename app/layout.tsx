import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

const openSans = Open_Sans({
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
        className={`${openSans.variable} font-sans antialiased bg-light text-dark`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

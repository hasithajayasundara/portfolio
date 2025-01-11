'use client';

import { usePathname } from "next/navigation";

import { AnimatePresence } from "framer-motion";


export const App = ({ children, }: Readonly<{ children: React.ReactNode }>) => {
  const path = usePathname();

  return (
    <>
      <AnimatePresence>
        <div key={path}>
          {children}
        </div>
      </AnimatePresence>
    </>
  );
}

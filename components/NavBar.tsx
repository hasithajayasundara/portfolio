'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

import { CustomLink } from "./CustomLink";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { CustomMobileLink } from "./CustomMobileLink";

const MotionLink = motion.create(Link);

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
      </button>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" onClick={handleClick} />
            <CustomMobileLink href="/about" title="About" onClick={handleClick} />
            {/*<CustomMobileLink href="/projects" title="Projects" onClick={handleClick} />*/}
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2 gap-3">
            <MotionLink href="https://github.com/hasithajayasundara" target="_blank" whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>
              <GitHubIcon className=" bg-light rounded-full w-20" />
            </MotionLink>
            <MotionLink href="https://www.linkedin.com/in/hasithanjo2/" target="_blank" whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>
              <LinkedInIcon />
            </MotionLink>
            {/*<button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className="ml-3 flex items-center justify-center rounded-full p-1">
          {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
        </button>*/}
          </nav>
        </motion.div>
      ) : null}

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex gap-8">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          {/*<CustomLink href="/projects" title="Projects" />*/}
        </nav>
        <nav className="flex items-center justify-center flex-wrap gap-3">
          <MotionLink href="https://github.com/hasithajayasundara" target="_blank" whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>
            <GitHubIcon className="w-8" />
          </MotionLink>
          <MotionLink href="https://www.linkedin.com/in/hasithanjo2/" target="_blank" whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>
            <LinkedInIcon className="w-8" />
          </MotionLink>
          {/*<button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className="ml-3 flex items-center justify-center rounded-full p-1">
          {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
        </button>*/}
        </nav>
      </div>
    </header>
  )
};

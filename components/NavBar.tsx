'use client';

import Link from "next/link";
import { motion } from 'framer-motion';

import { CustomLink } from "./CustomLink";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const MotionLink = motion.create(Link);

export const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light">
      <nav className="flex gap-8">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap gap-3">
        <MotionLink href="/" target="_blank" whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>
          <GitHubIcon className="w-6" />
        </MotionLink>
        <MotionLink href="/" target="_blank" whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>
          <LinkedInIcon className="w-6" />
        </MotionLink>
      </nav>
    </header>
  )
};

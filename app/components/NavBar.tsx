import Link from "next/link";

import { CustomLink } from "./CustomLink";

export const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mx-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav>
        <Link href="/" target="_blank">Github</Link>
        <Link href="/" target="_blank">LinkedIn</Link>
      </nav>
    </header>
  )
};

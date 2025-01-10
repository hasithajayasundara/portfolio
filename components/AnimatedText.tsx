'use client';

import { motion, Variants } from 'framer-motion';

type Props = {
  text: string;
  className?: string;
}

const quote: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  },
};

const singleWord: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  },
};

export const AnimatedText = ({ text, className }: Props) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, idx) => (
          <motion.span
            key={`${idx}-word`}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
};

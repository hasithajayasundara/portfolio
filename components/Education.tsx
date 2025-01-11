'use client';

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import { EducationDetails } from "./EducationDetails";

export const Education = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-16">
        Education
      </h2>
      <div className="ww-[75%] mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4" >
          <EducationDetails
            type="Bachelor of Science in Engineering (Electronics and Telecommunication)"
            time="2014 - 2018"
            place="Colombo, Sri Lanka"
            info="Enable agents to execute critical business functions, support branch operations, and enhance daily transaction efficiency by
leading management of five core web applications. Upkeep the component library and CI/CD configurations for all frontend
back-office applications by acting as core team member."
          />
        </ul>
      </div>
    </>
  );
};

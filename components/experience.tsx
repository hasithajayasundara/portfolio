'use client';

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import { ExperienceDetails } from "./experience-details";

const experienceConfig = [
  {
    position: "Software Engineer ii",
    company: "Sixt",
    time: "2022 — current",
    address: "Munich, Germany",
    companyLink: "https://sixt.de",
    work: ``,
  },
  {
    position: "Software Engineer",
    company: "Thirdfort",
    time: "2020-2022",
    address: "United Kingdom (Remote)",
    companyLink: "https://www.thirdfort.com/",
    work: ``,
  },
  {
    position: "Senior Software Engineer",
    company: "Creative Software",
    time: "2019 — 2020",
    address: "Colombo, Sri Lanka",
    companyLink: "https://www.creativesoftware.com/",
    work: ``,
  },
  {
    position: "Software Engineer",
    company: "WSO2",
    time: "2018 — 2019",
    address: "Colombo, Sri Lanka",
    companyLink: "https://wso2.com",
    work: ``,
  },
];

export const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2" >
          {experienceConfig.map((experience, index) => (
            <ExperienceDetails
              key={index}
              position={experience.position}
              company={experience.company}
              time={experience.time}
              address={experience.address}
              companyLink={experience.companyLink}
              work={experience.work}
            />))}
        </ul>
      </div>
    </>
  );
};

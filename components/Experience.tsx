'use client';

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import { ExperienceDetails } from "./ExperienceDetails";

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
          <ExperienceDetails
            position="Software Engineer ii"
            company="Sixt"
            time="2020 — 2022"
            address="Munich, Germany"
            companyLink="https://sixt.de"
            work="Enable agents to execute critical business functions, support branch operations, and enhance daily transaction 
            efficiency by managing five core web applications. Upkeep the component library and CI/CD configurations for all frontend
back-office applications by acting as core team member."
          />
          <ExperienceDetails
            position="Software Engineer"
            company="Thirdfort"
            time="2022-Present"
            address="United Kingdom (Remote)"
            companyLink="https://www.thirdfort.com/"
            work="Ensured flawless execution of all required functionalities by spearheading development and successful deployment of
Thirdfort web application, a specialised frontend tool tailored for legal professionals. Integrated event-driven architecture and
configured gRPC for optimised inter-service communication and seamless data flow by designing and implementing Go-
based service for company ID verification. Developed and integrated multiple REST endpoints, including one to ensure GDPR-
compliant data deletion from both the system and third-party services."
          />
          <ExperienceDetails
            position="Senior Software Engineer"
            company="Creative Software"
            time="2019 — 2020"
            address="Colombo, Sri Lanka"
            companyLink="https://www.creativesoftware.com/"
            work="Drove real-time analysis of oil rig behaviours by designing and developing ReactJS and TypeScript-based web application in
partnership with 3D Development Team. Architected and developed Site Reliability Engineering (SRE) dashboard and
supporting services using the MERN stack, alongside a deployment workflow for efficient management of customer
information. Ensured robust security measures by engineering secure, cookie-based authentication system utilising Google
OAuth for server-side user authentication."
          />
          <ExperienceDetails
            position="Software Engineer"
            company="WSO2"
            time="2018 — 2019"
            address="Colombo, Sri Lanka"
            companyLink="https://sixt.de"
            work="Facilitated efficient monitoring and management of idle connections based on user-configured intervals by integrating
heartbeat frame support into the Ballerina Message Broker. Evaluated broker’s performance under concurrent publisher and
subscriber workloads by creating benchmarking tool using Bash scripts and JMeter."
          />
        </ul>
      </div>
    </>
  );
};

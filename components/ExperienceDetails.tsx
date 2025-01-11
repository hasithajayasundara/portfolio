import { useRef } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

import { ListIcon } from "./ListIcon";

type Props = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

export const ExperienceDetails = ({
  position,
  company,
  companyLink = "",
  time,
  address,
  work,
}: Props) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <ListIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <Link href={companyLink} target="_blank" className="text-primary">
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm text-dark">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

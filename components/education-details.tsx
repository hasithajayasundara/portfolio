import { motion } from 'framer-motion';
import { useRef } from "react";

import { ListIcon } from "./list-icon";

type Props = {
  type: string;
  time: string;
  place: string;
  info: string;
};

export const EducationDetails = ({
  type,
  place,
  time,
  info,
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
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-dark">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

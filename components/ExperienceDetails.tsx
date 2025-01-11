import Link from "next/link";
import { ListIcon } from "./ListIcon";
import { useRef } from "react";

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
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <ListIcon reference={ref}/>
      <div>
        <h3 className="font-bold text-2xl">
          {position}&nbsp;
          <Link href={companyLink} target="_blank" className="text-primary">
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">
          {work}
        </p>
      </div>
    </li>
  );
};

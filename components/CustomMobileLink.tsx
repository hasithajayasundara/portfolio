
import { usePathname, useRouter } from "next/navigation";

type Props = {
  href: string;
  title: string;
  className?: string;
  onClick: () => void;
};

export const CustomMobileLink = ({ href, title, className = "", onClick }: Props) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    onClick();
    router.push(href);
  };

  return (
    <button className={`${className} relative group text-light my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

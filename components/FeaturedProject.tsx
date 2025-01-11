import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GitHubIcon } from "./Icons";

type Props = {
  title?: string;
  summary?: string;
  img?: StaticImageData | string;
  link?: string;
  github?: string;
}

export const FeaturedProject = ({
  title,
  summary,
  img,
  link,
  github,
}: Props) => {
  return (
    <article className="w-full flex flex-col items-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-4">
      <Link href={link ?? "#"} target="_blank" className="cursor-pointer overflow-hidden rounded-lg lg:w-full lg:pl-0 lg:pt-6">
        <Image
          src={img ?? ''}
          alt={title ?? ''}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between lg">
        <Link href={link ?? ''} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="mt-2 w-full text-left text-2xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="w-full flex items-center justify-between">
          <Link href={github ?? ''} target="_blank" className="w-10">
            <GitHubIcon />
          </Link>
          <Link href={link ?? ''} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base">
            Visit project
          </Link>
        </div>
      </div>
    </article>
  )
};

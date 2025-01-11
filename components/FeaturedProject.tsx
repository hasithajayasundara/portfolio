import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GitHubIcon } from "./Icons";

type Props = {
  type?: string;
  title?: string;
  summary?: string;
  img?: StaticImageData | string;
  link?: string;
  github?: string;
}

export const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: Props) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <Link href={link ?? "#"} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image
          src={img ?? ''}
          alt={title ?? ''}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link ?? ''} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github ?? ''} target="_blank" className="w-10">
            <GitHubIcon />
          </Link>
          <Link href={link ?? ''} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit project
          </Link>
        </div>
      </div>
    </article>
  )
};

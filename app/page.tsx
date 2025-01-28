import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/animated-text";
import { Layout } from "@/components/layout";
import profilePic from '../public/images/profile/hasithaj.png';

const Home = () => {
  return (
    <main className="flex items-center w-full min-h-screen text-dark">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-center w-full lg:flex-col gap-16">
          <div className="w-60 flex items-center justify-center rounded-full overflow-hidden border-2 border-dark">
            <Image
              priority
              src={profilePic}
              alt="Hasitha Jayasundara's picture"
              className="w-full md:inline-block"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center text-dark">
            <AnimatedText text="Hi, I'm Hasitha"
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              Results-driven Software Engineer with extensive experience in developing scalable web applications and 
              optimizing frontend and backend systems. Passionate about adopting cutting-edge technologies to deliver 
              high-impact, user-centric software solutions in fast-paced, agile environments.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              {/*<Link
                href="#"
                className="flex items-center gap-5 bg-dark text-light p-2 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark border-2
                border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume
                <ExternalLink />
              </Link>*/}
              <Link
                href="mailto:hasithanjo2work@gmail.com"
                className="flex items-center gap-5 bg-dark text-light p-2 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark border-2
                border-solid border-transparent hover:border-dark"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Home;

import Image from "next/image";
import Link from "next/link";

import { Layout } from "@/components/Layout";
import { AnimatedText } from "@/components/AnimatedText";
import profilePic from '../public/images/profile/developer-pic-1.png';

const Home = () => {
  return (
    <main className="flex items-center w-full min-h-screen text-dark">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image
              priority
              src={profilePic}
              alt="Hasitha Jayasundara's picture"
              className="w-full h-full lg:hidden md:inline-block md:w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText text="Hi, I'm Hasitha"
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a tech-savvy professional with extensive experience in driving technical innovation,
              I am passionate about creating scalable, efficient software solutions that not only
              meet business objectives but exceed them. With a strong track record in full-stack
              development, I thrive in delivering cutting-edge technology solutions that streamline
              operations and empower businesses to perform at their best.
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
                href="#"
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

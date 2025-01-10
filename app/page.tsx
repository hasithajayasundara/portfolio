import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Layout } from "@/components/Layout";
import { AnimatedText } from "@/components/AnimatedText";
import profilePic from '../public/images/profile/developer-pic-1.png';

export default function Home() {
  return (
    <main className="flex items-center w-full min-h-screen text-dark bg-light">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={profilePic} alt="Hasitha Jayasundara's picture" className="w-full h-full" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="Turning Vision Into Reality With Code and Design" className="!text-6xl !text-left" />
            <p className="my-4 text-base font-medium">
              As a tech-savvy professional with extensive experience in driving technical innovation,
              I am passionate about creating scalable, efficient software solutions that not only
              meet business objectives but exceed them. With a strong track record in full-stack
              development, I thrive in delivering cutting-edge technology solutions that streamline
              operations and empower businesses to perform at their best.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="#"
                className="flex items-center gap-5 bg-dark text-light p-2 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark border-2
                border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume
                <ExternalLink />
              </Link>
              <Link
                href="#"
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}

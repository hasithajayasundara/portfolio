import Image from "next/image";

import { AnimatedText } from "@/components/AnimatedText";
import { Layout } from "@/components/Layout";
import { Skills } from "@/components/Skills";
import profilePic from '../../public/images/profile/hasithaj-01.png';
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Passion fuels purpose" className="mb-16" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-5 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-g font-bold uppercase text-dark/75">
              About me
            </h2>
            <p className="font-medium">
              - Hi, I&apos;m Hasitha Jayasundara, a web developer and UI/UX designer with a passion for creating beautiful, functional,
              and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
              new and innovative ways to bring my clients&apos; visions to life.
            </p>
            <p className="my-4 font-medium">
              - I believe that design is about more than just making things look pretty – it&apos;s about solving problems and
              creating intuitive, enjoyable experiences for users.
            </p>
            <p className="font-medium">
              - Whether I&apos;m working on a website, mobile app, or
              other digital product, I bring my commitment to design excellence and user-centered thinking to
              every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>
          <div className="col-span-3">
            <Image
              src={profilePic}
              alt="Hasitha Jayasundara's image"
              className="w-max h-auto rounded-2xl border-2 border-solid border-dark p-8"
            />
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  )
};

export default About;

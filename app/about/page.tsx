import Image from "next/image";

import { AnimatedText } from "@/components/animated-text";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Layout } from "@/components/layout";
import { Skills } from "@/components/skills";
import profilePic from '../../public/images/profile/hasithaj-01.png';

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="About me" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
        <div className="grid grid-cols-4 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start lg:col-span-4 lg:order-2 text-dark">
            <p className="font-medium">
              Proven history of success in architecting and developing cutting-edge software solutions, streamlining development
              processes, and enhancing operational efficiency through automation and modern tooling. Skilled in optimising full-stack
              applications, migrating legacy systems,and driving significant performance improvements using technologies like React,
              TypeScript, Node.js, and Go.
            </p>
            <p className="font-medium my-4">
              Adept at leading cross-functional teams, mentoring engineers, and fostering collaboration to
              achieve project goals and exceed performance targets. Well-versed in designing and implementing robust CI/CD pipelines,
              containerisation strategies, and cloud-native deployments with Docker and Kubernetes.
            </p>
            <p className="font-medium">
              Passionate about continuously evolving technical expertise, exploring emerging technologies, and delivering innovative software engineering solutions.
              Known for driving seamless integration of complex systems, improving code quality, and improving application maintainability through best practices.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-4 flex items-center justify-center lg:order-1">
            <Image
              priority
              src={profilePic}
              alt="Hasitha Jayasundara's image"
              className="w-max h-auto rounded-2xl border-2 border-solid border-dark"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

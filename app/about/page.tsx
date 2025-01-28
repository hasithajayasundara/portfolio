import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Layout } from "@/components/layout";
import { Skills } from "@/components/skills";

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  )
};

export default About;

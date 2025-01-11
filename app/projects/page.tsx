import { AnimatedText } from "@/components/AnimatedText";
import { Layout } from "@/components/Layout";

const Projects = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Projects" className="mb-16 lg:!text-7xl sm:!mb-8m sm:!text-6xl xs:!text-4xl" />
        <div className="flex justify-center h-screen">
            <h1>Coming soon</h1>
        </div>
      </Layout>
    </main>
  )
};

export default Projects;

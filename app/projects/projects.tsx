import { AnimatedText } from "@/components/AnimatedText";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Layout } from "@/components/Layout";
import project1 from '../../public/images/projects/project-1.png'

const Projects = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Projects" className="mb-16 lg:!text-7xl sm:!mb-8m sm:!text-6xl xs:!text-4xl" />
        <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-4 md:col-span-12">
            <FeaturedProject
              title="Nexter"
              summary="Landing page for real state service"
              img={project1}
              link="/"
              github="/"
            />
          </div>
          <div className="col-span-4 md:col-span-12">
            <FeaturedProject
              title="Nexter"
              summary="Landing page for real state service"
              img={project1}
              link="/"
              github="/"
            />
          </div>
        </div>
      </Layout>
    </main>
  )
};

export default Projects;

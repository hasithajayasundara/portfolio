import { AnimatedText } from "@/components/AnimatedText";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Layout } from "@/components/Layout";
import project1 from '../../public/images/projects/project-1.png'

const Projects = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Imagination trumps knowledge" className="mb-16" />
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <FeaturedProject
              type="Featured project"
              title="Nexter"
              summary="Landing page for real state service"
              img={project1}
              link="/"
              github="/"
            />
          </div>
          <div className="col-span-6">
            <FeaturedProject
              type="Featured project"
              title="Nexter"
              summary="Landing page for real state service"
              img={project1}
              link="/"
              github="/"
            />
          </div>
          <div className="col-span-6">
            Project 2
          </div>
        </div>
      </Layout>
    </main>
  )
};

export default Projects;

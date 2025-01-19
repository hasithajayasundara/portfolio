import { AnimatedText } from "@/components/animated-text";
import { FeaturedProject } from "@/components/featured-project";
import { Layout } from "@/components/layout";

import manageLandingPage from '../../public/images/projects/manage-landing-page.png';
import nexter from '../../public/images/projects/nexter.png';
import slackClone from '../../public/images/projects/slack-clone.png';
import spaceTravel from '../../public/images/projects/space-travel.png';

const projects = [
  {
    title: "Space travel",
    summary: "Page for an imaginary space travel agency",
    img: spaceTravel,
    github: "https://github.com/hasithajayasundara/frontend-mentor-mini-projects/tree/main/space-travel",
    link: "https://sthnj.netlify.app/",
  },
  {
    title: "Manage landing page",
    summary: "Landing page for an imaginary company",
    img: manageLandingPage,
    github: "https://github.com/hasithajayasundara/frontend-mentor-mini-projects/tree/main/manage-landing-page",
    link: "https://managelphnj.netlify.app/",
  },
  {
    title: "Slack Clone",
    summary: "A simplified clone of Slack, developed using modern web technologies",
    img: slackClone,
    github: "https://github.com/hasithajayasundara/slack-clone",
  },
  {
    title: "Nexter",
    summary: "Landing page for real estate service",
    img: nexter,
    github: "https://github.com/hasithajayasundara/websites-html-css-js/tree/main/nexter",
    link: "https://nextor-hnj.netlify.app/",
  },
];

const Projects = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Projects" className="mb-16 lg:!text-7xl sm:!mb-8m sm:!text-6xl xs:!text-4xl" />
        <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          {projects.map((project, index) => (
            <div key={index} className="col-span-4 md:col-span-12">
              <FeaturedProject
                title={project.title}
                summary={project.summary}
                img={project.img}
                github={project.github}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </Layout>
    </main>
  )
};

export default Projects;

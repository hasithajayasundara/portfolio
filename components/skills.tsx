'use client';

import { motion } from 'framer-motion';

import {
  CSS3Icon,
  DockerIcon,
  FigmaIcon,
  GoIcon,
  HTML5Icon,
  JavaScriptIcon,
  JenkinsIcon,
  JestIcon,
  KubernetesIcon,
  MongoIcon,
  MySqlIcon,
  NextJsIcon,
  NodeIcon,
  PostGreSqlIcon,
  ReactIcon,
  RedisIcon,
  StorybookIcon,
  TailWindIcon,
  TypeScriptIcon,
  ViteIcon,
  WebpackIcon,
} from "./icons";

type SkillType = {
  name: string;
  icon: React.FC<{ className: string }>;
};

const config: SkillType[] = [
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Go", icon: GoIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "React", icon: ReactIcon },
  { name: "HTML5", icon: HTML5Icon },
  { name: "CSS3", icon: CSS3Icon },
  { name: "Kubernetes", icon: KubernetesIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "Vite", icon: ViteIcon },
  { name: "Tailwind CSS", icon: TailWindIcon },
  { name: "Webpack", icon: WebpackIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Jenkins", icon: JenkinsIcon },
  { name: "Jest", icon: JestIcon },
  { name: "Storybook", icon: StorybookIcon },
  { name: "MySql", icon: MySqlIcon },
  { name: "Postgresql", icon: PostGreSqlIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "MongoDB", icon: MongoIcon }
];

export const Skills = () => (
  <>
    <h2 className="text-dark font-bold text-8xl mt-64 w-full text-center mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8">
      Skills
    </h2>
    <div className="w-full h-full grid grid-cols-7 gap-10 xl:grid-cols-5 md:grid-cols-4 xs:grid-cols-2">
      {config.map(({ name, icon: Icon }) => (
        <motion.div
          key={name}
          className="flex flex-col items-center cursor-pointer"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.08 }}
        >
          <Icon className="w-20" />
          <span className="mt-2 text-sm font-semibold text-dark">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  </>
);

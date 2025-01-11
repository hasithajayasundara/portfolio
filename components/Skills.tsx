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
} from "./Icons";

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

export const Skills = () => {
  //const ref = useRef<HTMLDivElement | null>(null);
  //const [items, setItems] = useState<SkillType[]>([]);

  //useLayoutEffect(() => {
  //  if (ref) {
  //    const containerWidth = ref.current?.clientWidth;
  //    if (containerWidth) {
  //      const itemsPerLine = Math.floor(containerWidth / 100);
  //      const itemRows = Math.ceil(config.length / itemsPerLine);

  //      let endY = -40;
  //      let endX = -40;

  //      const itemsWithFinalPosition = [];
  //      for (let i = 0; i < itemRows; i++) {
  //        for (let j = 0; j < itemsPerLine; j++) {
  //          const position = i * itemsPerLine + j;
  //          if (Object.hasOwn(config, position)) {
  //            const skillItem = config[position];
  //            itemsWithFinalPosition.push({ ...skillItem, position: { y: `${endY}vh`, x: `${endX}vw` } });
  //          }

  //          endX += 10;
  //        }

  //        endX = -40;
  //        endY += 20;
  //      }

  //      setItems(itemsWithFinalPosition);
  //    }
  //  }
  //}, []);

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-16">
        Skills
      </h2>
      <div className="w-full h-full grid grid-cols-7 gap-10">
        {config.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 1 }}
          >
            <Icon className="w-20" />
            <span className="mt-2 text-sm font-semibold">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

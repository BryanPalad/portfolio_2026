import Image from "next/image";
import {
  backEndStack,
  databaseUsed,
  frontEndStack,
  toolsUsed,
} from "@/data";
import { BackgroundBeams } from "./ui/BackgroundBeams";

type SkillItem = { title: string; img: string };

const stackGroups: {
  title: string;
  items: SkillItem[];
}[] = [
  {
    title: "Frontend",
    items: frontEndStack,
  },
  {
    title: "Backend",
    items: backEndStack,
  },
  {
    title: "Data & Infrastructure",
    items: databaseUsed,
  },
  {
    title: "Tools",
    items: toolsUsed,
  },
];

const SkillGroup = ({
  title,
  items,
}: (typeof stackGroups)[number]) => (
  <article className="grid gap-6 border-b border-slate-200 py-8 last:border-b-0 dark:border-white/[0.09] md:grid-cols-[180px_1fr] md:gap-10">
    <h2 className="text-lg font-semibold text-slate-900 dark:text-white md:text-xl">{title}</h2>

    <div className="grid grid-cols-3 gap-x-5 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
      {items.map((item) => (
        <div
          key={`${title}-${item.title}`}
          className="group flex flex-col items-center gap-3 text-center"
        >
          <div className="flex h-11 w-11 items-center justify-center transition duration-200 group-hover:-translate-y-1">
            <Image
              alt={item.title}
              src={item.img}
              width={44}
              height={44}
              className="max-h-11 w-auto object-contain"
            />
          </div>
          <span className="text-xs font-medium leading-4 text-slate-600 transition group-hover:text-purple dark:text-neutral-400 dark:group-hover:text-white">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  </article>
);

const Skills = () => (
  <section className="relative z-10 scroll-mt-24 py-20" id="skills">
    <div className="relative z-10 mx-auto mb-10 max-w-2xl text-center">
      <h1 className="heading">
        Tech <span className="text-purple">Stack</span>
      </h1>
    </div>

    <div className="relative z-10 mx-auto max-w-5xl">
      {stackGroups.map((group) => (
        <SkillGroup key={group.title} {...group} />
      ))}
    </div>

    <BackgroundBeams />
  </section>
);

export default Skills;

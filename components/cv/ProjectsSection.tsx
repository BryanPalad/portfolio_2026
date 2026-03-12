import Image from "next/image";

type ProjectItem = {
  id: number;
  title: string;
  des: string;
  img: string;
  link: string;
  github: string;
  iconLists?: string[];
};

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
      <h2 className="text-xl font-bold text-slate-900 [font-family:var(--font-heading)] dark:text-white">
        Selected Projects
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-black/25"
          >
            <div className="relative h-36 w-full">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-1 line-clamp-3 text-xs text-slate-700 dark:text-slate-300">
                {project.des}
              </p>
              {project.iconLists && project.iconLists.length > 0 && (
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.iconLists.map((icon) => (
                      <span
                        key={`${project.id}-${icon}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 bg-white dark:border-white/15 dark:bg-black/35"
                      >
                        <Image
                          src={icon}
                          alt="Project tech"
                          width={16}
                          height={16}
                          className="h-4 w-4 object-contain"
                        />
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline dark:text-cyan-200"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline dark:text-cyan-200"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

type StackGroup = {
  title: string;
  items: string[];
};

type TechStackCardProps = {
  groups: StackGroup[];
};

const TechStackCard = ({ groups }: TechStackCardProps) => {
  const totalSkills = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-slate-900 [font-family:var(--font-heading)] dark:text-white">
          Tech Stack
        </h2>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {totalSkills} skills
        </span>
      </div>

      <div className="mt-5 space-y-5">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((stack) => (
                <span
                  key={`${group.title}-${stack}`}
                  className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-white/15 dark:bg-black/25 dark:text-slate-200"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default TechStackCard;

import { experienceJourney } from "./content";

const getExperienceLabel = () => {
  if (experienceJourney.length === 0) {
    return "0+ years";
  }

  const startDates = experienceJourney.map((item) => new Date(item.startDate));
  const earliestStart = new Date(Math.min(...startDates.map((date) => date.getTime())));
  const latestEnd = new Date(
    Math.max(
      ...experienceJourney.map((item) =>
        item.endDate ? new Date(item.endDate).getTime() : Date.now()
      )
    )
  );

  let totalMonths =
    (latestEnd.getFullYear() - earliestStart.getFullYear()) * 12 +
    (latestEnd.getMonth() - earliestStart.getMonth());

  if (latestEnd.getDate() < earliestStart.getDate()) {
    totalMonths -= 1;
  }

  const years = Math.max(1, Math.floor(totalMonths / 12));
  return `${years}+ years`;
};

const AboutCard = () => {
  const experienceLabel = getExperienceLabel();

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
      <h2 className="text-xl font-bold text-slate-900 [font-family:var(--font-heading)] dark:text-white">
        About
      </h2>

      <p className="mt-5 leading-relaxed text-slate-700 dark:text-slate-300">
        Enthusiastic software developer with {experienceLabel} of experience in
        software and web development. I am currently looking for a challenging
        role where I can keep learning, build impactful products, and
        collaborate with a team that values creativity, ownership, and growth.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
        I build maintainable frontend and full stack solutions using modern
        technologies such as Next.js, React, TypeScript, Node.js, and Spring
        Boot. I enjoy turning complex requirements into reliable,
        production-ready systems with clean UI, robust APIs, and strong
        delivery practices.
      </p>
    </article>
  );
};

export default AboutCard;

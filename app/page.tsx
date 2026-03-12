import { projects, socialMedia } from "@/data";
import AboutCard from "@/components/cv/AboutCard";
import ExperienceJourneyCard from "@/components/cv/ExperienceJourneyCard";
import ProfileHeader from "@/components/cv/ProfileHeader";
import ProjectsSection from "@/components/cv/ProjectsSection";
import SocialLinksCard from "@/components/cv/SocialLinksCard";
import TechStackCard from "@/components/cv/TechStackCard";
import { experienceJourney } from "@/components/cv/content";

const groupedStacks = [
  {
    title: "Frontend Development",
    items: [
      "JavaScript",
      "VueJS",
      "ReactJS",
      "NextJS",
      "TypeScript",
      "SCSS",
      "Tailwind CSS",
      "Material UI",
      "ShadCN",
      "Aceternity UI",
      "Redux",
      "Context API",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Fastify", "Express", "Java", "Spring Boot", "PHP", "C#"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "Deployment & Version Control",
    items: ["Vercel", "Netlify", "Git", "GitHub", "GitLab", "Bitbucket"],
  },
  {
    title: "Tools & Developer Utilities",
    items: [
      "VS Code",
      "IntelliJ IDEA",
      "DataGrip",
      "Postman",
      "NPM",
      "Jest",
      "Figma",
      "ChatGPT",
    ],
  },
  {
    title: "E-commerce, CMS & SEO",
    items: [
      "Shopify",
      "Shopify Liquid",
      "WordPress",
      "Elementor",
      "Yoast SEO",
      "GSC",
    ],
  },
  {
    title: "Methodology",
    items: ["Agile Scrum Methodology"],
  },
];

const githubLink = socialMedia.find((item) => item.id === 1)?.link ?? "#";
const linkedInLink = socialMedia.find((item) => item.id === 2)?.link ?? "#";
const year = new Date().getFullYear();

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 transition-colors dark:bg-[#090e16] dark:text-slate-100 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl space-y-5">
        <ProfileHeader />

        <section className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <AboutCard />
          <SocialLinksCard githubLink={githubLink} linkedInLink={linkedInLink} />
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <TechStackCard groups={groupedStacks} />
          <ExperienceJourneyCard items={experienceJourney} />
        </section>

        <ProjectsSection projects={projects.slice(0, 4)} />

        <footer className="pb-2 pt-1 text-center text-sm text-slate-500 dark:text-slate-400">
          Copyright © {year} Bryan Palad
        </footer>
      </div>
    </main>
  );
}

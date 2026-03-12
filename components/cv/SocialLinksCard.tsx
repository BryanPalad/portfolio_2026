import { FaGithub, FaLinkedin } from "react-icons/fa6";

type SocialLinksCardProps = {
  githubLink: string;
  linkedInLink: string;
};

const SocialLinksCard = ({ githubLink, linkedInLink }: SocialLinksCardProps) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
      <h2 className="text-xl font-bold text-slate-900 [font-family:var(--font-heading)] dark:text-white">
        Social Links
      </h2>
      <div className="mt-4 space-y-3 text-sm">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-slate-700 transition hover:border-sky-400 hover:text-sky-700 dark:border-white/10 dark:bg-black/20 dark:text-slate-200 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={linkedInLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-slate-700 transition hover:border-sky-400 hover:text-sky-700 dark:border-white/10 dark:bg-black/20 dark:text-slate-200 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </article>
  );
};

export default SocialLinksCard;

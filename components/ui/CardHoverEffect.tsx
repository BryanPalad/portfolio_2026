import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import {
  FaAppStore,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaGooglePlay,
} from "react-icons/fa6";

interface ItemsProps {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github: string;
  googleplayLink: string;
  appstoreLink: string;
}

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: ItemsProps[];
  className?: string;
}) => (
  <div
    className={cn(
      "mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/[0.09] dark:bg-[#0a0e1c]/80",
      className
    )}
  >
    {items.map((item, index) => {
      const imageOnRight = index % 2 === 0;

      return (
        <article
          key={item.id}
          className="grid gap-8 border-b border-slate-200 p-5 last:border-b-0 dark:border-white/[0.08] md:grid-cols-2 md:items-center md:gap-12 md:p-10 lg:p-14"
        >
          <div
            className={cn(
              "relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_24px_60px_-36px_rgba(203,172,249,0.55)]",
              imageOnRight && "md:order-2"
            )}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className={cn(imageOnRight && "md:order-1")}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-purple">
              Project {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="text-2xl font-bold leading-tight text-slate-900 dark:text-white md:text-3xl">
              {item.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-neutral-400 md:text-base">
              {item.des}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {item.iconLists.map((icon) => (
                <span
                  key={icon}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/[0.04]",
                    icon.includes("nextjs") && "bg-white dark:bg-white"
                  )}
                >
                  <Image
                    src={icon}
                    alt="Project technology"
                    width={22}
                    height={22}
                    className={cn(
                      "h-5 w-5 object-contain",
                      icon.includes("nextjs") && "h-6 w-6"
                    )}
                  />
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-purple px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-85"
                >
                  View project <FaArrowUpRightFromSquare size={13} />
                </Link>
              )}
              {item.github && (
                <Link
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-purple/60 hover:text-purple dark:border-white/15 dark:text-white"
                >
                  GitHub <FaGithub />
                </Link>
              )}
              {item.googleplayLink && (
                <Link
                  href={item.googleplayLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:border-white/15 dark:text-white"
                >
                  Google Play <FaGooglePlay />
                </Link>
              )}
              {item.appstoreLink && (
                <Link
                  href={item.appstoreLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:border-white/15 dark:text-white"
                >
                  App Store <FaAppStore />
                </Link>
              )}
            </div>
          </div>
        </article>
      );
    })}
  </div>
);

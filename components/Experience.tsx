"use client";

import { useState } from "react";
import {
  IconCalendar,
  IconChevronDown,
  IconMapPin,
} from "@tabler/icons-react";
import { experienceJourney, type JourneyItem } from "./cv/content";

const VISIBLE_ACHIEVEMENTS = 3;

const companyDetails: Record<string, { location: string; arrangement: string }> = {
  "Allied Marketing Group": {
    location: "Los Angeles, California, United States",
    arrangement: "Remote",
  },
  "Arxon Solutions LLC": {
    location: "Roseville, California, United States",
    arrangement: "Part time · Remote",
  },
  "eMandarin Ventures Inc.": {
    location: "Bonifacio Global City, Taguig",
    arrangement: "Full time",
  },
};

const formatDate = (dateInput: string) =>
  new Date(`${dateInput}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

const getDuration = (item: JourneyItem) => {
  const start = new Date(`${item.startDate}T00:00:00`);
  const end = item.endDate
    ? new Date(`${item.endDate}T00:00:00`)
    : new Date();
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();

  if (end.getDate() < start.getDate()) months -= 1;
  months = Math.max(months, 1);

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts = [];

  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remainingMonths) {
    parts.push(`${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`);
  }

  return parts.join(" ");
};

const getTechnologies = (item: JourneyItem) =>
  [item.frontEnd, item.backEnd]
    .filter(Boolean)
    .flatMap((value) => value!.split(", "));

const ExperienceCard = ({ item }: { item: JourneyItem }) => {
  const [expanded, setExpanded] = useState(false);
  const achievements = item.descriptions ?? [];
  const visibleAchievements = expanded
    ? achievements
    : achievements.slice(0, VISIBLE_ACHIEVEMENTS);
  const hasMore = achievements.length > VISIBLE_ACHIEVEMENTS;
  const details = companyDetails[item.company] ?? {
    location: "Philippines",
    arrangement: "",
  };
  const dateRange = `${formatDate(item.startDate)} — ${
    item.endDate ? formatDate(item.endDate) : "Present"
  }`;

  return (
    <article className="relative ml-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none md:ml-12 md:p-8">
        <span className="absolute -left-[43px] top-8 h-4 w-4 rounded-full border-4 border-[#f6f7fb] bg-purple shadow-[0_0_0_4px_rgba(37,99,235,0.12)] dark:border-[#000319] md:-left-[53px]" />
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
              {item.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-purple">
              {item.company}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-2 text-sm text-slate-600 dark:text-neutral-300 md:items-end">
            <span className="inline-flex items-center gap-2">
              <IconCalendar size={17} className="text-purple" />
              {dateRange} · {getDuration(item)}
            </span>
            <span className="inline-flex items-center gap-2 md:text-right">
              <IconMapPin size={17} className="shrink-0 text-purple" />
              {details.location}{details.arrangement ? ` · ${details.arrangement}` : ""}
            </span>
          </div>
        </div>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 dark:text-neutral-200 md:text-base">
          {item.detail}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {getTechnologies(item).map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-white/[0.06] dark:text-neutral-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/[0.08]">
          <ul className="space-y-3">
            {visibleAchievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-neutral-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              className="mt-5 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-purple transition hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple dark:hover:text-white"
            >
              {expanded
                ? "Show less"
                : `View ${achievements.length - VISIBLE_ACHIEVEMENTS} more`}
              <IconChevronDown
                size={17}
                className={`transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
    </article>
  );
};

const Experience = () => (
  <section className="mt-20 scroll-mt-24 py-20" id="experience">
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h1 className="heading">
        Work <span className="text-purple">Experience</span>
      </h1>
    </div>

    <div className="relative mx-auto max-w-6xl space-y-5">
      <div className="absolute bottom-8 left-[3px] top-8 w-px bg-gradient-to-b from-purple via-purple/40 to-purple/10 md:left-[3px]" />
      {experienceJourney.map((item) => (
        <ExperienceCard
          key={`${item.company}-${item.startDate}`}
          item={item}
        />
      ))}
    </div>
  </section>
);

export default Experience;

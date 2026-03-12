"use client";

import { useState } from "react";
import type { JourneyItem } from "./content";

type ExperienceJourneyCardProps = {
  items: JourneyItem[];
};

const ExperienceJourneyCard = ({ items }: ExperienceJourneyCardProps) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const formatDate = (dateInput: string) => {
    const date = new Date(dateInput);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getDurationLabel = (startDateInput: string, endDateInput?: string) => {
    const startDate = new Date(startDateInput);
    const endDate = endDateInput ? new Date(endDateInput) : new Date();

    let totalMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    if (endDate.getDate() < startDate.getDate()) {
      totalMonths -= 1;
    }

    if (totalMonths < 1) {
      return "Less than a month";
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
      return `${totalMonths} ${totalMonths === 1 ? "month" : "months"}`;
    }

    if (months === 0) {
      return `${years} ${years === 1 ? "year" : "years"}`;
    }

    return `${years} ${years === 1 ? "year" : "years"} & ${months} ${
      months === 1 ? "month" : "months"
    }`;
  };

  const toggleExpanded = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
      <h2 className="text-xl font-bold text-slate-900 [font-family:var(--font-heading)] dark:text-white">
        Experience Journey
      </h2>
      <div className="mt-4 space-y-4 border-l border-slate-300 pl-4 dark:border-white/15">
        {items.map((item) => {
          const itemKey = `${item.period}-${item.title}`;
          const isExpanded = Boolean(expandedItems[itemKey]);
          const rangeLabel = `${formatDate(item.startDate)} - ${
            item.endDate ? formatDate(item.endDate) : "Present"
          }`;
          const durationLabel = getDurationLabel(item.startDate, item.endDate);

          return (
          <div key={itemKey} className="relative">
            <span className="absolute -left-[22px] top-1 h-2.5 w-2.5 rounded-full bg-sky-500 dark:bg-cyan-300" />
            <p className="text-xs font-semibold text-sky-700 dark:text-cyan-200">
              {rangeLabel} ({durationLabel})
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {item.company}
            </p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
              {item.detail}
            </p>

            {isExpanded && item.descriptions && item.descriptions.length > 0 && (
              <div className="mt-3 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {item.frontEnd && (
                  <p>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Front-End:
                    </span>{" "}
                    {item.frontEnd}
                  </p>
                )}
                {item.backEnd && (
                  <p>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Back-End:
                    </span>{" "}
                    {item.backEnd}
                  </p>
                )}
                {item.tools && (
                  <p>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Tools used:
                    </span>{" "}
                    {item.tools}
                  </p>
                )}
                <ul className="list-disc space-y-1 pl-4">
                  {item.descriptions.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.descriptions && item.descriptions.length > 0 && (
              <button
                type="button"
                onClick={() => toggleExpanded(itemKey)}
                className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 underline-offset-4 hover:underline dark:text-cyan-200"
              >
                {isExpanded ? "Show less" : "View more"}
              </button>
            )}
          </div>
        )})}
      </div>
    </article>
  );
};

export default ExperienceJourneyCard;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  FaDownload,
  FaEnvelope,
  FaLocationDot,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
import BryanPalad from "@/public/heroImg/BryanPalad2.png";

const ProfileHeader = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = resolvedTheme === "dark";

  return (
    <section className="rounded-3xl border border-slate-200 bg-[linear-gradient(160deg,#ffffff_0%,#eef4ff_70%)] p-5 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.4)] dark:border-white/10 dark:bg-[linear-gradient(160deg,#151d29_0%,#0c111a_70%)] dark:shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)] md:p-7">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={BryanPalad}
            alt="Bryan Palad"
            className="h-24 w-24 rounded-2xl border border-slate-300 object-cover dark:border-white/15"
            priority
          />
          <div>
            <h1 className="text-3xl font-bold text-slate-900 [font-family:var(--font-heading)] dark:text-white md:text-4xl">
              Bryan Palad
            </h1>
            <p className="mt-1 text-sm font-medium text-sky-700 dark:text-cyan-200">
              Software Developer / Frontend Engineer
            </p>
            <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <FaLocationDot className="text-sky-600 dark:text-cyan-300" />
              Philippines
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 transition hover:bg-slate-100 dark:border-white/15 dark:bg-transparent dark:text-slate-100 dark:hover:border-cyan-300/60"
            aria-label="Toggle theme"
          >
            {mounted && isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href="/files/BryanPalad-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-white/15 dark:bg-white/90 dark:text-slate-900 dark:hover:bg-white"
          >
            <FaDownload /> Download CV
          </a>
          <a
            href="mailto:paladbryanj@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-700 dark:border-white/15 dark:text-slate-100 dark:hover:border-cyan-300/60 dark:hover:text-cyan-100"
          >
            <FaEnvelope /> Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;

import { projects } from "@/data";
import React from "react";
import { CardHoverEffect } from "./ui/CardHoverEffect";

const RecentProjects = () => {
  return (
    <section className="mt-10 scroll-mt-24 py-20" id="projects">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-purple">
        Selected work
      </p>
      <h1 className="heading">
        Recent <span className="text-purple">Projects</span>
      </h1>
      <CardHoverEffect items={projects} />
    </section>
  );
};

export default RecentProjects;

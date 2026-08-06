import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import PortfolioChatbot from "@/components/PortfolioChatbot";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center overflow-clip bg-[#f6f7fb] px-5 text-slate-900 transition-colors dark:bg-black-100 dark:text-white sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <SectionReveal>
          <Hero />
        </SectionReveal>
        <SectionReveal>
          <Grid />
        </SectionReveal>
        <SectionReveal>
          <Experience />
        </SectionReveal>
        <SectionReveal>
          <Skills />
        </SectionReveal>
        <SectionReveal>
          <RecentProjects />
        </SectionReveal>
        <SectionReveal>
          <Footer />
        </SectionReveal>
        <PortfolioChatbot />
      </div>
    </main>
  );
}

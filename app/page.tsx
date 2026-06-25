"use client";

import { useEffect } from "react";
import { useScrollStore } from "@/lib/store";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { GlobalImpactSection } from "@/components/GlobalImpactSection";
import { DirectFundingSupportSection } from "@/components/DirectFundingSupportSection";
import { CrisisProgrammingSection } from "@/components/CrisisProgrammingSection";
import { CrisisResponseSection } from "@/components/CrisisResponseSection";
import { AssessmentsSection } from "@/components/AssessmentsSection";
import { TalentNetworkSection } from "@/components/TalentNetworkSection";
import { SpecialMeasuresSection } from "@/components/SpecialMeasuresSection";
import { ReadinessTrainingSection } from "@/components/ReadinessTrainingSection";
import { WorkforceIntelligenceSection } from "@/components/WorkforceIntelligenceSection";
import { FutureOutlookSection } from "@/components/FutureOutlookSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const setScrollProgress = useScrollStore((state) => state.setScrollProgress);
  const setActiveChapter = useScrollStore((state) => state.setActiveChapter);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(scrollProgress);

      // Scroll-spy: the active chapter is the last one whose top has
      // scrolled past the sticky header, so the nav highlight tracks
      // whichever section is currently in view as the user scrolls.
      const headerOffset = 160;
      const sections = document.querySelectorAll("[data-chapter]");
      let current = 0;
      sections.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerOffset) {
          current = idx;
        }
      });
      setActiveChapter(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollProgress, setActiveChapter]);

  return (
    <main className="bg-white">
      <ScrollProgress />
      <Header />
      <GlobalImpactSection />
      <DirectFundingSupportSection />
      <CrisisProgrammingSection />
      <CrisisResponseSection />
      <AssessmentsSection />
      <TalentNetworkSection />
      <SpecialMeasuresSection />
      <ReadinessTrainingSection />
      <WorkforceIntelligenceSection />
      <FutureOutlookSection />
      <Footer />
    </main>
  );
}

"use client";

import { useEffect } from "react";
import { useScrollStore } from "@/lib/store";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { GlobalImpactSection } from "@/components/GlobalImpactSection";
import { DirectFundingSupportSection } from "@/components/DirectFundingSupportSection";
import { CrisisResponseSection } from "@/components/CrisisResponseSection";
import { TalentNetworkSection } from "@/components/TalentNetworkSection";
import { SpecialMeasuresSection } from "@/components/SpecialMeasuresSection";
import { ReadinessTrainingSection } from "@/components/ReadinessTrainingSection";
import { WorkforceIntelligenceSection } from "@/components/WorkforceIntelligenceSection";
import { FutureOutlookSection } from "@/components/FutureOutlookSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const setScrollProgress = useScrollStore((state) => state.setScrollProgress);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollProgress]);

  return (
    <main className="bg-white">
      <ScrollProgress />
      <Header />
      <GlobalImpactSection />
      <DirectFundingSupportSection />
      <CrisisResponseSection />
      <TalentNetworkSection />
      <SpecialMeasuresSection />
      <ReadinessTrainingSection />
      <WorkforceIntelligenceSection />
      <FutureOutlookSection />
      <Footer />
    </main>
  );
}

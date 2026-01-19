import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Sponsors } from "@/components/Sponsors";
import { EmotionalReframe } from "@/components/EmotionalReframe";
import { ProblemMirror } from "@/components/ProblemMirror";
import { TargetAudience } from "@/components/TargetAudience";
import { Differentiator } from "@/components/Differentiator";
import { Services } from "@/components/Services";
import { Outcomes } from "@/components/Outcomes";
import { Relief } from "@/components/Relief";
import { Testimonials } from "@/components/Testimonials";
import { Timeline } from "@/components/Timeline";
import { TeamSection } from "@/components/TeamSection";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AvailableIndicator } from "@/components/AvailableIndicator";

export const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* 1. HERO (Above the Fold) - DARK */}
      <Hero />

      {/* Trust Metrics + Tools Strip - DARK */}
      <Sponsors />

      {/* 2. PROBLEME DER ZIELGRUPPE - DARK */}
      <EmotionalReframe />

      {/* 3. DIE SYMPTOME - LIGHT */}
      <ProblemMirror />

      {/* 4. FÜR WEN IST DAS? - DARK */}
      <TargetAudience />

      {/* 5. DIE FLOWSTACK-METHODE - LIGHT */}
      <Differentiator />

      {/* 6. LEISTUNGSBAUSTEINE - DARK */}
      <Services />

      {/* 7. VORTEILE / OUTCOMES - DARK */}
      <Outcomes />
      <Relief />

      {/* 8. FALLSTUDIEN - LIGHT */}
      <Testimonials />

      {/* 9. ABLAUF DER ZUSAMMENARBEIT - DARK */}
      <Timeline />

      {/* 10. TEAM - DARK (gray-900) */}
      <TeamSection />

      {/* 11. FAQ - LIGHT */}
      <FAQ />

      {/* 12. CTA-SECTION - DARK */}
      <Cta />

      {/* FOOTER */}
      <Footer />

      <ScrollToTop />
      <AvailableIndicator />
    </>
  );
};

export default HomePage;

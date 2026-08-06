import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { Overview } from "./components/Overview";
import { MissionVision } from "./components/MissionVision";
import { Expertise } from "./components/Expertise";
import { Industries } from "./components/Industries";
import { Solutions } from "./components/Solutions";
import { HowWeWork } from "./components/HowWeWork";
import { CaseStudies } from "./components/CaseStudies";
import { TechStack } from "./components/TechStack";
import { Research } from "./components/Research";
import { Insights } from "./components/Insights";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Faq } from "./components/Faq";
import { CtaBanner } from "./components/CtaBanner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trusted By */}
        <TrustedBy />

        {/* 4. Company Overview */}
        <Overview />

        {/* 5. Mission & Vision */}
        <MissionVision />

        {/* 6. Expertise */}
        <Expertise />

        {/* 7. Industries */}
        <Industries />

        {/* 8. Solutions */}
        <Solutions />

        {/* 9. How We Work */}
        <HowWeWork />

        {/* 10. Case Studies */}
        <CaseStudies />

        {/* 11. Technology Stack */}
        <TechStack />

        {/* 12. Research & Innovation */}
        <Research />

        {/* 13. Insights & Blog */}
        <Insights />

        {/* 14. Testimonials */}
        <Testimonials />

        {/* 15. Team */}
        <Team />

        {/* 16. FAQ */}
        <Faq />

        {/* 17. Call to Action */}
        <CtaBanner />

        {/* 18. Contact Section */}
        <Contact />
      </main>

      {/* 19. Footer */}
      <Footer />
    </div>
  );
}

"use client";

import Footer from "@/components/fotter";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import HireMeSection from "@/components/sections/HireMeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import StatsSection from "@/components/sections/StatsSection";
export default function HOME() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Skills section */}
      <SkillsSection />

      {/* Education & Programming languages section */}
      <AboutSection />

      {/* My services section */}
      <ServicesSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Stats Section */}
      <StatsSection/>

      {/* Contact Section */}

      <ContactSection />

      {/* Hire Me Section */}
      <HireMeSection />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

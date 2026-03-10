import { lazy } from "react";
import Navbar from "@/components/Navbar";

const HeroSection = lazy(() => import("@/components/HeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const VisionSection = lazy(() => import("@/components/VisionSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const WhyUs = lazy(() => import("@/components/WhyUs"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <HowItWorks />
      <WhyUs />
      <ContactSection />
      <Footer />
  </div>
);

export default Index;

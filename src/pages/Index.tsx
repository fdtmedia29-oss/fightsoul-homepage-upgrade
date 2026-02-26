import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import IsRightForYou from "@/components/IsRightForYou";
import WhySection from "@/components/WhySection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowToStart from "@/components/HowToStart";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <IsRightForYou />
      <WhySection />
      <GallerySection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <HowToStart />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;

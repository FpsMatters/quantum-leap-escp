import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import HowWeOperateSection from "@/components/HowWeOperateSection";
import MembershipSection from "@/components/MembershipSection";
import ApplicationSection from "@/components/ApplicationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <WhyJoinSection />
      <HowWeOperateSection />
      <MembershipSection />
      <ApplicationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
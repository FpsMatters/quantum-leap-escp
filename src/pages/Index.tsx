import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import MembersSection from "@/components/MembersSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import HowWeOperateSection from "@/components/HowWeOperateSection";
import MembershipSection from "@/components/MembershipSection";
import ApplicationSection from "@/components/ApplicationSection";
import ContactSection from "@/components/ContactSection";
import FloatingNavigation from "@/components/FloatingNavigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingNavigation />
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <MembersSection />
      <WhyJoinSection />
      <HowWeOperateSection />
      <MembershipSection />
      <ApplicationSection />
      <ContactSection />
    </div>
  );
};

export default Index;

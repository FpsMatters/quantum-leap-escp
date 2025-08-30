import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-quantum-gradient relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent rounded-full animate-pulse-gold"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-accent/50 rotate-45 animate-rotate-in"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/20 rounded-lg animate-bounce-soft"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 animate-zoom-in">
          <img 
            src="/lovable-uploads/9772a82c-c65c-4bc3-9535-e13d9f2ccf3b.png" 
            alt="Quantum Capital Society Logo"
            className="mx-auto w-32 h-32 md:w-48 md:h-48 object-contain shadow-glow"
          />
        </div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Quantum Capital Society
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-accent mb-8 animate-fade-in-delay animate-pulse-gold">
          Building the Next Generation of Student Traders & Quants
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
          Student Association at ESCP • Hedge Fund • Trading • Finance • Engineering
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gold-gradient text-primary font-semibold px-8 py-4 text-lg shadow-gold quantum-hover animate-glow"
        >
          Join Our Society
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
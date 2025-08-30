import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Access to professional trading platforms and real-time market data",
  "Mentorship from industry professionals and alumni in top financial institutions",
  "Participation in exclusive networking events and career fairs",
  "Hands-on experience with quantitative modeling and algorithmic trading",
  "Certificate programs in financial engineering and risk management",
  "Priority access to internship and job opportunities",
  "Collaborative projects with leading fintech companies",
  "Exposure to cutting-edge financial technologies and blockchain applications"
];

const WhyJoinSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Why Join <span className="text-accent animate-pulse-gold">Our Society?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            Unlock exclusive opportunities and accelerate your career in quantitative finance
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-quantum">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 animate-fly-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1 animate-bounce-soft" />
                  <p className="text-lg text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Special Callout */}
          <Card className="mt-8 p-6 bg-gold-gradient text-primary shadow-gold animate-glow">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3 animate-pulse-gold">
                🚀 No Prior Experience Required!
              </h3>
              <p className="text-lg">
                Whether you're a beginner or experienced trader, our comprehensive training programs 
                will elevate your skills to professional levels.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
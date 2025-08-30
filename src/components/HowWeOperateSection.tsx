import { Card } from "@/components/ui/card";
import { Calendar, Users2, BookOpen, ArrowRight } from "lucide-react";

const operatingSteps = [
  {
    icon: Calendar,
    title: "Weekly Meetings",
    description: "Every Thursday at 18:00 for market analysis, strategy discussions, and skill development sessions"
  },
  {
    icon: Users2,
    title: "Team Projects",
    description: "Collaborative projects on portfolio optimization, algorithmic trading, and risk modeling"
  },
  {
    icon: BookOpen,
    title: "Hands-on Learning",
    description: "Live trading simulations, case studies, and real-world market analysis"
  }
];

const HowWeOperateSection = () => {
  return (
    <section className="py-20 bg-quantum-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-accent rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-accent/50 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            How We Operate
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-delay">
            A structured approach to building quantitative finance expertise
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {operatingSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20 quantum-hover animate-rotate-in"
                      style={{ animationDelay: `${index * 0.3}s` }}>
                  <div className="w-20 h-20 mx-auto mb-6 bg-gold-gradient rounded-full flex items-center justify-center shadow-glow animate-bounce-soft">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed text-lg">{step.description}</p>
                </Card>
                
                {/* Arrow connector */}
                {index < operatingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-accent animate-pulse-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <Card className="mt-12 p-8 bg-white/5 backdrop-blur-sm border-white/20 text-center animate-fade-in-delay">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Learning Journey</h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From market fundamentals to advanced quantitative strategies, we provide a comprehensive 
              learning path that prepares you for success in the dynamic world of quantitative finance.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowWeOperateSection;
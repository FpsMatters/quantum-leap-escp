import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Award, Users2 } from "lucide-react";
import TradingTerminal from "./TradingTerminal";

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

const achievements = [
  {
    icon: TrendingUp,
    title: "Portfolio Growth",
    value: "+247%",
    description: "Average annual return"
  },
  {
    icon: Award,
    title: "Competition Wins",
    value: "12",
    description: "Inter-university victories"
  },
  {
    icon: Users2,
    title: "Alumni Network",
    value: "300+",
    description: "Working in top firms"
  }
];

const WhyJoinSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-float"
              style={{
                left: `${i * 7}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Why Join <span className="text-accent animate-pulse-gold">Our Society?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            Unlock exclusive opportunities and accelerate your career in quantitative finance
          </p>
        </div>
        
        {/* Achievements Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-8 text-center trading-terminal animate-bounce-soft"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <achievement.icon className="w-12 h-12 mx-auto mb-4 text-accent animate-pulse-gold" />
              <div className="text-4xl font-bold text-accent font-mono mb-2 animate-trading-glow">
                {achievement.value}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-white/70 text-sm">{achievement.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits List */}
          <div>
            <Card className="p-8 shadow-quantum">
              <h3 className="text-2xl font-bold text-primary mb-6">Member Benefits</h3>
              <div className="grid gap-4">
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
          </div>
          
          {/* Trading Terminal */}
          <div className="animate-slide-right">
            <TradingTerminal />
            
            {/* Special Callout */}
            <Card className="mt-6 p-6 bg-gold-gradient text-primary shadow-gold animate-glow">
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
      </div>
    </section>
  );
};

export default WhyJoinSection;
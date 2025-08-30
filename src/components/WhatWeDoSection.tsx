import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Trophy, Network } from "lucide-react";

const activities = [
  {
    icon: TrendingUp,
    title: "Trading Labs",
    description: "Hands-on trading sessions using professional platforms and real market data",
    color: "bg-quantum-gradient"
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Technical analysis, quantitative modeling, and financial engineering workshops",
    color: "bg-gold-gradient"
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Inter-university trading competitions and hackathons with prestigious prizes",
    color: "bg-quantum-gradient"
  },
  {
    icon: Network,
    title: "Networking",
    description: "Exclusive events with industry professionals from top investment banks and hedge funds",
    color: "bg-gold-gradient"
  }
];

const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-quantum-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/20 rotate-45 animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            What We Do
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-delay">
            Immersive experiences designed to transform students into market-ready professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="p-6 text-center quantum-hover bg-white/10 backdrop-blur-sm border-white/20 animate-fly-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${activity.color} flex items-center justify-center shadow-glow animate-bounce-soft`}>
                <activity.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
              <p className="text-white/80 leading-relaxed">{activity.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
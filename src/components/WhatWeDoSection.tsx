import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Trophy, Network, BarChart3, Brain, Code, Target } from "lucide-react";
import quantWorkspaceImage from "@/assets/quant-workspace.jpg";

const activities = [
  {
    icon: TrendingUp,
    title: "Live Trading Labs",
    description: "Real-time trading with $100K simulated capital using Bloomberg Terminal and professional platforms",
    color: "bg-quantum-gradient",
    stats: "Weekly"
  },
  {
    icon: Brain,
    title: "Quant Workshops",
    description: "Machine learning models, algorithmic strategies, and quantitative risk management techniques",
    color: "bg-gold-gradient",
    stats: "Monthly"
  },
  {
    icon: Trophy,
    title: "Trading Competitions",
    description: "Inter-university tournaments with prize pools and recruitment opportunities",
    color: "bg-quantum-gradient",
    stats: "Yearly"
  },
  {
    icon: Network,
    title: "Industry Networking",
    description: "Exclusive access to hedge fund managers, prop traders, and quantitative researchers",
    color: "bg-gold-gradient",
    stats: "2x/year"
  },
  {
    icon: Code,
    title: "Algorithm Development",
    description: "Python/R coding sessions for backtesting, portfolio optimization, and strategy automation",
    color: "bg-quantum-gradient",
    stats: "Bi-weekly"
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "Technical and fundamental analysis of global markets, crypto, commodities, and derivatives",
    color: "bg-gold-gradient",
    stats: "Weekly"
  },
  {
    icon: Target,
    title: "Risk Management",
    description: "Advanced portfolio theory, VaR modeling, and stress testing methodologies",
    color: "bg-quantum-gradient",
    stats: "Per Semester"
  }
];

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-20 bg-quantum-gradient relative overflow-hidden">
      {/* Quant Workspace Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${quantWorkspaceImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 border border-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/20 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-accent/30 rounded-lg animate-spin" style={{ animationDuration: '20s' }}></div>
        
        {/* Floating Trading Symbols */}
        {['$', '€', '¥', '£', '₿'].map((symbol, index) => (
          <div 
            key={index}
            className="absolute text-4xl text-accent/20 font-bold animate-float"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
              animationDelay: `${index * 0.8}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            What We Do
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-delay">
            Immersive experiences designed to transform students into market-ready professionals
          </p>
          
          {/* Live Market Status */}
          <div className="mt-8 inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/30 animate-trading-glow">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-accent font-mono text-sm">Markets Open • Active Trading</span>
            <div className="text-white/60">|</div>
            <span className="text-white/80 text-sm"></span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="p-6 text-center quantum-hover bg-white/10 backdrop-blur-sm border-white/20 animate-fly-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Activity Frequency Badge */}
              <div className="absolute top-2 right-2 bg-accent/20 px-2 py-1 rounded text-xs text-accent font-mono">
                {activity.stats}
              </div>
              
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${activity.color} flex items-center justify-center shadow-glow animate-bounce-soft relative`}
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <activity.icon className="w-8 h-8 text-white" />
                
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/50 animate-ping"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
              <p className="text-white/80 leading-relaxed text-sm">{activity.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/20 inline-block animate-glow">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Trading?</h3>
            <p className="text-white/80 mb-6 max-w-lg">
              Join our next trading session and experience professional-grade market analysis firsthand
            </p>
            <div className="flex items-center justify-center space-x-4 text-accent font-mono text-sm">
              <span>📅 Next Session: Pending..</span>
              <span>|</span>
              <span>🏢 ESCP Trading Floor</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;

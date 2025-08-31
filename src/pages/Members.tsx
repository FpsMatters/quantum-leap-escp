import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users2, TrendingUp, BarChart3, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingElements from "@/components/FloatingElements";
import StockTicker from "@/components/StockTicker";

const members = [
  {
    name: "Alex TOUMASSON",
    role: "President Quant",
    year: "BSC 2",
    description: "Former BNP Paribas intern with expertise in Crypto and liquid futures trading and risk management. Leading our society towards excellence in quantitative finance.",
    icon: Users2,
    specialty: "Algorithmic trading"
  },
  {
    name: "Lucas THAI",
    role: "President of Trading",
    year: "BSC 2", 
    description: "Passionate about fundemental analysis of equities. Leading our society towards excellence in manual investments. ",
    icon: TrendingUp,
    specialty: "Fundemental analysis with macro"
  },
  {
    name: "Arsene LEFEBVRE",
    role: "President of Marketing ",
    year: "BSC 2",
    description: "Experience in growing social media pages. Previous business intern at a big film distribution company",
    icon: BarChart3,
    specialty: "Marketing"
  },
  {
    name: "Mattéo ADAM",
    role: "President of Operations",
    year: "BSC 2",
    description: "Specializing in software and web related developments. Previous intern in the legal sector.",
    icon: Settings,
    specialty: "Operations & Partnerships"
  }
];

const Members = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <StockTicker />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-quantum-deep-blue via-background to-quantum-deep-blue relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="border-accent/30 text-accent hover:bg-accent/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6 animate-pulse-gold">
              <Users2 className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Our <span className="text-accent animate-pulse-gold">Leadership Team</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto animate-fade-in-delay">
              Meet the exceptional individuals driving innovation in quantitative finance at ESCP
            </p>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {members.map((member, index) => (
              <Card 
                key={index}
                className="p-8 trading-terminal animate-fly-in hover:shadow-quantum transition-all duration-500 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-full" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-accent/20">
                        <member.icon className="w-10 h-10 text-accent animate-pulse-gold" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                          {member.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-accent font-bold text-lg animate-pulse-gold">
                            {member.role}
                          </span>
                          <span className="text-primary/60 text-sm">•</span>
                          <span className="text-primary font-medium">
                            {member.year}
                          </span>
                        </div>
                        <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">
                          {member.specialty}
                        </div>
                      </div>
                      
                      <p className="text-white/80 leading-relaxed text-base">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            ))}
          </div>
          
          {/* Coming Soon */}
          <div className="text-center mt-16">
            <Card className="p-12 max-w-2xl mx-auto trading-terminal animate-bounce-soft">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-pulse-gold">
                  <Users2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-primary">More Team Members</h3>
                <p className="text-xl text-white/70 text-center">
                  Our society is growing! More talented individuals will be joining our leadership team soon.
                </p>
                <div className="flex items-center space-x-2 text-accent font-mono animate-pulse-gold">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  <span>Coming Soon...</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;

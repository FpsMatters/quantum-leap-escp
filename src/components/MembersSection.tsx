import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MembersSection = () => {
  const navigate = useNavigate();

  return (
    <section id="members" className="py-20 bg-gradient-to-b from-quantum-deep-blue via-quantum-deep-blue to-background relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6 animate-pulse-gold">
            <Users2 className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in text-center">
            Meet Our <span className="text-accent animate-trading-glow">Leadership Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay text-center">
            Driven by passion, guided by expertise. Our team brings together the brightest minds in quantitative finance.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12">
          {/* Preview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
            {Array.from({ length: 4 }, (_, i) => (
              <Card 
                key={i}
                className="p-6 trading-terminal animate-fly-in hover:shadow-quantum transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users2 className="w-10 h-10 text-accent animate-pulse-gold" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse-gold" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">Leadership Role</h3>
                  <div className="text-accent text-sm font-mono mb-2 animate-trading-glow">
                    {["President", "VP Trading", "VP Quant", "VP Operations"][i]}
                  </div>
                  <p className="text-white/70 text-xs">
                    Meet our exceptional team member
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-bounce-soft">
            <Button
              onClick={() => navigate('/members')}
              className="bg-gold-gradient text-primary hover:shadow-gold px-8 py-4 text-lg font-bold animate-glow group"
            >
              <span className="flex items-center space-x-3">
                <span>Meet Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
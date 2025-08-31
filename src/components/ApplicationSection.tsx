import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, UserCheck, Calendar, Clock, MapPin } from "lucide-react";

const applicationSteps = [
  {
    icon: FileText,
    title: "Complete Application",
    description: "Fill out our comprehensive application form with your background and interests",
    duration: "15 minutes"
  },
  {
    icon: UserCheck,
    title: "Interview Process",
    description: "Participate in a brief interview to discuss your goals and fit with our society",
    duration: "20 minutes"
  },
  {
    icon: Calendar,
    title: "Welcome Session",
    description: "Attend orientation and begin your journey as a Quantum Capital Society member",
    duration: "1 hour"
  }
];

const ApplicationSection = () => {
  return (
    <section id="application" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Application <span className="text-accent animate-pulse-gold">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            Join our elite community of student traders and quants in three simple steps
          </p>
          
          {/* Live Application Status */}
          <div className="mt-8 inline-flex items-center space-x-4 bg-primary/10 px-6 py-3 rounded-full border border-accent/30 animate-trading-glow">
            <Clock className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-accent font-mono text-sm">Applications: Open</span>
            <div className="text-muted-foreground">|</div>
            <span className="text-muted-foreground text-sm">Response Time: &lt;48hrs</span>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <Card 
                key={index}
                className="p-8 text-center shadow-quantum gold-hover animate-fly-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-primary/10 px-2 py-1 rounded text-xs text-primary font-mono">
                  {step.duration}
                </div>
                
                <div className="w-16 h-16 mx-auto mb-6 bg-gold-gradient rounded-full flex items-center justify-center shadow-glow animate-bounce-soft">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Progress Connector */}
                {index < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-accent/50 z-10">
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <Card className="p-12 text-center bg-quantum-gradient shadow-quantum animate-glow relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-12 h-12 border border-accent rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-accent/30 rotate-45 animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Begin Your Journey?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Applications are open year-round. Join us and transform your passion for finance 
              into professional expertise with industry-leading training and mentorship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-gold-gradient text-primary font-bold px-8 py-4 text-lg shadow-gold quantum-hover animate-glow transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfWaW65Hd-36E_T44P4D8RBFKcpIv8mA9bVCTgQtys2iPlGpw/viewform?usp=header', '_blank')}
              >
                Apply Now via Google Form
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center space-x-4 text-white/80">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center animate-rotate-in border border-accent/30">
                  <div className="w-8 h-8 border-2 border-accent rounded border-dashed animate-spin"></div>
                </div>
                <span className="text-sm">Scan QR Code<br/>for Quick Access</span>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent font-mono">48h</div>
                <div className="text-sm text-white/60">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent font-mono">Coming soon..</div>
                <div className="text-sm text-white/60">Acceptance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent font-mono">4</div>
                <div className="text-sm text-white/60">Current Members</div>
              </div>
            </div>
          </div>
          
          {/* Meeting Info */}
          <div className="mt-8 pt-8 border-t border-white/20 text-white/70">
            <div className="flex justify-center items-center space-x-6 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                <span>ESCP Campus</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-accent" />
                <span>Next Meeting: Pending...</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ApplicationSection;

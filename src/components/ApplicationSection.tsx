import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, UserCheck, Calendar } from "lucide-react";

const applicationSteps = [
  {
    icon: FileText,
    title: "Complete Application",
    description: "Fill out our comprehensive application form with your background and interests"
  },
  {
    icon: UserCheck,
    title: "Interview Process",
    description: "Participate in a brief interview to discuss your goals and fit with our society"
  },
  {
    icon: Calendar,
    title: "Welcome Session",
    description: "Attend orientation and begin your journey as a Quantum Capital Society member"
  }
];

const ApplicationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Application <span className="text-accent animate-pulse-gold">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            Join our elite community of student traders and quants in three simple steps
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <Card 
                key={index}
                className="p-6 text-center shadow-quantum gold-hover animate-fly-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gold-gradient rounded-full flex items-center justify-center shadow-glow animate-bounce-soft">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-accent mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <Card className="p-12 text-center bg-quantum-gradient shadow-quantum animate-glow">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Begin Your Journey?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Applications are open year-round. Join us and transform your passion for finance 
            into professional expertise with industry-leading training and mentorship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold-gradient text-primary font-bold px-8 py-4 text-lg shadow-gold quantum-hover animate-glow"
            >
              Apply Now via Google Form
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex items-center space-x-4 text-white/80">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center animate-rotate-in">
                <div className="w-8 h-8 border-2 border-accent rounded border-dashed animate-spin"></div>
              </div>
              <span className="text-sm">Scan QR Code<br/>for Quick Access</span>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-white/70">
            <p className="text-sm">
              <strong>Next Application Deadline:</strong> Rolling basis • 
              <strong> Response Time:</strong> Within 1 week
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ApplicationSection;
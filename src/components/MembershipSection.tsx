import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Users, Crown } from "lucide-react";

const roles = [
  {
    icon: User,
    title: "Analyst",
    description: "Entry-level position for learning market analysis and trading fundamentals",
    requirements: ["ESCP student", "Passionate about finance", "Commitment to attend weekly sessions"],
    color: "bg-primary"
  },
  {
    icon: Users,
    title: "Associate",
    description: "Intermediate role involving portfolio management and strategy development",
    requirements: ["6+ months as Analyst", "Demonstrated trading knowledge", "Leadership potential"],
    color: "bg-secondary"
  },
  {
    icon: Crown,
    title: "Senior Associate",
    description: "Advanced position leading research projects and mentoring new members",
    requirements: ["1+ year experience", "Proven track record", "Advanced quantitative skills"],
    color: "bg-gold-gradient"
  }
];

const MembershipSection = () => {
  return (
    <section id="membership" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Membership <span className="text-accent animate-pulse-gold">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            Multiple pathways to develop your quantitative finance expertise
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {roles.map((role, index) => (
            <Card 
              key={index}
              className="p-8 text-center shadow-quantum gold-hover animate-bounce-soft"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${role.color} flex items-center justify-center shadow-glow`}>
                <role.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">{role.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{role.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Requirements:</h4>
                {role.requirements.map((req, reqIndex) => (
                  <Badge key={reqIndex} variant="outline" className="block text-center py-2 animate-fly-in">
                    {req}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Eligibility Section */}
        <Card className="p-8 text-center bg-quantum-gradient shadow-quantum animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-6">Student Eligibility</h3>
          <div className="grid md:grid-cols-2 gap-8 text-white/90">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-accent">Academic Requirements</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-center"><span className="text-accent mr-2">•</span>Currently enrolled at ESCP</li>
                <li className="flex items-center justify-center"><span className="text-accent mr-2">•</span>Any program level (Bachelor/Master/PhD)</li>
                <li className="flex items-center justify-center"><span className="text-accent mr-2">•</span>Minimum GPA of 3.0 preferred</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-accent">Personal Qualities</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-center"><span className="text-accent mr-2">•</span>Strong analytical mindset</li>
                <li className="flex items-center justify-center"><span className="text-accent mr-2">•</span>Interest in financial markets</li>
                <li className="flex items-center justify-center"><span className="text-accent mr-2">•</span>Collaborative team player</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MembershipSection;

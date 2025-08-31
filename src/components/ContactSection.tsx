import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "quantumcapitalsociety@gmail.com",
    href: "mailto:quantumcapitalsociety@gmail.com",
    color: "text-accent"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@QuantumCapitalSociety",
    href: "#",
    color: "text-blue-600"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@algotradesdaily",
    href: "#",
    color: "text-pink-600"
  }
];

const partners = [
  { name: "ESCP Business School", logo: "🎓" },
  { name: "Bloomberg Terminal", logo: "📊" },
  { name: "Trading Technologies", logo: "💹" },
  { name: "QuantConnect", logo: "🔬" }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-quantum-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-accent rounded-lg animate-spin"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Get in <span className="text-accent animate-pulse-gold">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-delay">
            Connect with us and become part of the quantitative finance revolution
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index}
              className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20 quantum-hover animate-slide-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <contact.icon className={`w-12 h-12 mx-auto mb-4 ${contact.color} animate-bounce-soft`} />
              <h3 className="text-xl font-bold text-white mb-2">{contact.label}</h3>
              <a 
                href={contact.href}
                className="text-accent hover:text-white transition-colors duration-300"
              >
                {contact.value}
              </a>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <Card className="p-12 text-center bg-white/5 backdrop-blur-sm border-white/20 mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-6">Questions? We're Here to Help</h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're interested in joining, partnering with us, or just learning more about 
            quantitative finance, don't hesitate to reach out.
          </p>
          <Button 
            size="lg" 
            className="bg-gold-gradient text-primary font-bold px-8 py-4 text-lg shadow-gold quantum-hover transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeQRE8Fauf_Fsi3GqGsHBdyVAicq6h4_D2qFyMfDREuMWi21A/viewform?usp=header', '_blank')}
          >
            Send us a Message
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </Card>
        
        {/* Partners & Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8 animate-fade-in">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 quantum-hover animate-bounce-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <p className="text-white font-medium">{partner.name}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/20 animate-fade-in-delay">
          <p className="text-white/60">
            © 2025 Quantum Capital Society - ESCP. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

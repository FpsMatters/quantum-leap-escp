import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            About <span className="text-accent animate-pulse-gold">Quantum Capital Society</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            We are the premier student-led trading and quantitative finance society at ESCP, 
            dedicated to bridging the gap between academic theory and real-world financial markets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <Card className="p-8 shadow-quantum gold-hover animate-slide-left">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To cultivate the next generation of quantitative traders and financial engineers by providing 
              hands-on experience with cutting-edge trading technologies, market analysis techniques, and 
              risk management strategies. We bridge theoretical knowledge with practical application 
              through real-world trading simulations and industry partnerships.
            </p>
          </Card>
          
          {/* Vision */}
          <Card className="p-8 shadow-quantum gold-hover animate-slide-right">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become Europe's leading student trading society, recognized for producing exceptional 
              quantitative analysts and traders who drive innovation in financial markets. We envision 
              a community where students master both the art and science of trading while building 
              lasting professional networks in the finance industry.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
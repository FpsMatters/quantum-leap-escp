import { Card } from "@/components/ui/card";
import TradingChart from "./TradingChart";
import financialChartsImage from "@/assets/financial-charts.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${financialChartsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            About <span className="text-accent animate-pulse-gold">Quantum Capital Society</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            We are the premier student-led trading and quantitative finance society at ESCP, 
            dedicated to bridging the gap between academic theory and real-world financial markets.
          </p>
        </div>
        
        {/* Performance Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Annual Return", value: "coming soon..", icon: "📈" },
            { title: "Win Rate", value: "coming soon..", icon: "🎯" },
            { title: "Active Members", value: "4", icon: "👥" },
            { title: "Total Trades", value: "coming soon..", icon: "💹" }
          ].map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center trading-terminal animate-bounce-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-accent font-mono">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.title}</div>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission */}
          <div className="space-y-8">
            <Card className="p-8 shadow-quantum gold-hover animate-slide-left">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To cultivate the next generation of quantitative traders and financial engineers by providing 
                hands-on experience with cutting-edge trading technologies, market analysis techniques, and 
                risk management strategies. We bridge theoretical knowledge with practical application 
                through real-world trading simulations and industry partnerships.
              </p>
            </Card>
            
            <Card className="p-8 shadow-quantum gold-hover animate-slide-left" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become Europe's leading student trading society, recognized for producing exceptional 
                quantitative analysts and traders who drive innovation in financial markets. We envision 
                a community where students master both the art of trading and the strategic execution 
                through compounding to accelerate the growth of your professional investment portfolios. 
              </p>
            </Card>
          </div>
          
          {/* Trading Chart */}
          <div className="animate-slide-right">
            <TradingChart 
              title="Portfolio Performance (YTD)" 
              className="animate-trading-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

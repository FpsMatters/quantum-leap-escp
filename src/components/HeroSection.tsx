import { Button } from "@/components/ui/button";
import { ArrowDown, Activity, TrendingUp } from "lucide-react";
import FloatingElements from "./FloatingElements";
import StockTicker from "./StockTicker";
import useStockData from "@/hooks/useStockData";
import tradingFloorImage from "@/assets/trading-floor.jpg";

const HeroSection = () => {
  const { stockData } = useStockData();
  
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  // Get a sample stock for the market data strip
  const sampleStock = stockData.length > 0 ? stockData[0] : null;
  
  return (
    <>
      <section id="hero" className="min-h-screen bg-quantum-gradient relative overflow-hidden flex items-center justify-center">
        {/* Trading Floor Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${tradingFloorImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-deep-blue/90 via-quantum-navy/80 to-quantum-deep-blue/90"></div>
        
        {/* Floating Elements */}
        <FloatingElements />
        
        {/* NEW SOCIETY Stamp with Paint Drips */}
        <div className="absolute top-16 left-16 z-20">
          <div className="relative animate-bounce-soft">
            {/* Main Paint Stamp - More Irregular */}
            <div className="w-32 h-32 relative">
              <svg viewBox="0 0 120 120" className="w-32 h-32 transform -rotate-15">
                {/* Highly irregular paint base using path */}
                <path d="M15 45 Q25 20 45 25 Q65 15 85 30 Q105 25 110 50 Q115 70 95 85 Q105 95 85 105 Q70 115 50 110 Q30 120 20 95 Q5 80 10 60 Q8 50 15 45 Z" 
                      fill="#dc2626" opacity="0.8"/>
                
                {/* Secondary irregular layer */}
                <path d="M20 50 Q30 25 50 30 Q70 20 90 35 Q100 30 105 55 Q110 75 90 90 Q100 100 80 100 Q65 110 45 105 Q25 115 15 90 Q10 75 15 65 Q12 55 20 50 Z" 
                      fill="#b91c1c" opacity="0.9"/>
                
                {/* Inner irregular core */}
                <path d="M25 55 Q35 35 55 40 Q75 30 85 45 Q95 40 100 60 Q105 80 85 85 Q90 95 75 95 Q60 100 40 95 Q30 105 25 85 Q20 70 25 65 Q22 60 25 55 Z" 
                      fill="#dc2626" opacity="0.95"/>
                
                {/* Extreme paint splatters and bumps */}
                <ellipse cx="15" cy="35" rx="4" ry="12" fill="#991b1b" opacity="0.8" transform="rotate(45 15 35)"/>
                <ellipse cx="105" cy="40" rx="3" ry="15" fill="#991b1b" opacity="0.7" transform="rotate(-20 105 40)"/>
                <ellipse cx="25" cy="95" rx="6" ry="10" fill="#991b1b" opacity="0.8" transform="rotate(60 25 95)"/>
                <ellipse cx="95" cy="85" rx="4" ry="18" fill="#991b1b" opacity="0.7" transform="rotate(-45 95 85)"/>
                <ellipse cx="110" cy="65" rx="5" ry="8" fill="#991b1b" opacity="0.6" transform="rotate(15 110 65)"/>
                <ellipse cx="8" cy="70" rx="3" ry="12" fill="#991b1b" opacity="0.8" transform="rotate(-30 8 70)"/>
                
                {/* Random paint blobs for texture */}
                <circle cx="35" cy="40" r="3" fill="#7f1d1d" opacity="0.9"/>
                <circle cx="75" cy="35" r="2.5" fill="#7f1d1d" opacity="0.8"/>
                <circle cx="45" cy="80" r="4" fill="#7f1d1d" opacity="0.7"/>
                <circle cx="80" cy="75" r="2.8" fill="#7f1d1d" opacity="0.9"/>
                <circle cx="30" cy="65" r="2" fill="#7f1d1d" opacity="0.8"/>
                <circle cx="85" cy="50" r="3.5" fill="#7f1d1d" opacity="0.6"/>
                <circle cx="55" cy="25" r="2.2" fill="#7f1d1d" opacity="0.9"/>
                <circle cx="65" cy="95" r="2.8" fill="#7f1d1d" opacity="0.7"/>
                
                {/* More chaotic splatters */}
                <circle cx="12" cy="25" r="2" fill="#991b1b" opacity="0.8"/>
                <circle cx="108" cy="30" r="1.5" fill="#991b1b" opacity="0.9"/>
                <circle cx="18" cy="105" r="3" fill="#991b1b" opacity="0.7"/>
                <circle cx="102" cy="100" r="2.2" fill="#991b1b" opacity="0.8"/>
                <circle cx="5" cy="55" r="1.8" fill="#991b1b" opacity="0.9"/>
                <circle cx="115" cy="75" r="2.5" fill="#991b1b" opacity="0.6"/>
              </svg>
              
              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center transform -rotate-15">
                <div className="text-center">
                  <div className="text-white font-black text-sm tracking-wider transform rotate-2 drop-shadow-lg">NEW</div>
                  <div className="text-white font-black text-sm tracking-wider transform -rotate-1 drop-shadow-lg">SOCIETY</div>
                </div>
              </div>
            </div>
            
            {/* Paint shadow/blur effect */}
            <div className="absolute top-2 left-2 w-32 h-32 -z-10">
              <svg viewBox="0 0 120 120" className="w-32 h-32 transform -rotate-15">
                <path d="M15 45 Q25 20 45 25 Q65 15 85 30 Q105 25 110 50 Q115 70 95 85 Q105 95 85 105 Q70 115 50 110 Q30 120 20 95 Q5 80 10 60 Q8 50 15 45 Z" 
                      fill="#000000" opacity="0.15" filter="blur(3px)"/>
              </svg>
            </div>
          </div>
          
          {/* Paint Drips Extending onto Screen */}
          <div className="absolute top-32 left-8 w-2 h-24 z-10">
            <svg viewBox="0 0 20 200" className="w-2 h-24">
              <ellipse cx="10" cy="0" rx="8" ry="15" fill="#dc2626" opacity="0.7"/>
              <ellipse cx="10" cy="20" rx="6" ry="25" fill="#b91c1c" opacity="0.8"/>
              <ellipse cx="10" cy="50" rx="4" ry="30" fill="#991b1b" opacity="0.6"/>
              <ellipse cx="10" cy="90" rx="3" ry="20" fill="#7f1d1d" opacity="0.7"/>
              <ellipse cx="10" cy="120" rx="2" ry="15" fill="#991b1b" opacity="0.5"/>
              <ellipse cx="10" cy="150" rx="1.5" ry="12" fill="#7f1d1d" opacity="0.6"/>
              <circle cx="10" cy="180" r="2" fill="#991b1b" opacity="0.4"/>
            </svg>
          </div>
          
          <div className="absolute top-28 left-20 w-1.5 h-16 z-10">
            <svg viewBox="0 0 15 120" className="w-1.5 h-16">
              <ellipse cx="7.5" cy="0" rx="6" ry="12" fill="#dc2626" opacity="0.6"/>
              <ellipse cx="7.5" cy="15" rx="4" ry="18" fill="#b91c1c" opacity="0.7"/>
              <ellipse cx="7.5" cy="40" rx="3" ry="20" fill="#991b1b" opacity="0.5"/>
              <ellipse cx="7.5" cy="70" rx="2" ry="15" fill="#7f1d1d" opacity="0.6"/>
              <ellipse cx="7.5" cy="95" rx="1.5" ry="10" fill="#991b1b" opacity="0.4"/>
              <circle cx="7.5" cy="110" r="1.5" fill="#7f1d1d" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-30 left-24 w-1 h-12 z-10">
            <svg viewBox="0 0 10 100" className="w-1 h-12">
              <ellipse cx="5" cy="0" rx="4" ry="10" fill="#dc2626" opacity="0.5"/>
              <ellipse cx="5" cy="12" rx="3" ry="15" fill="#b91c1c" opacity="0.6"/>
              <ellipse cx="5" cy="30" rx="2" ry="18" fill="#991b1b" opacity="0.4"/>
              <ellipse cx="5" cy="55" rx="1.5" ry="12" fill="#7f1d1d" opacity="0.5"/>
              <ellipse cx="5" cy="75" rx="1" ry="8" fill="#991b1b" opacity="0.3"/>
              <circle cx="5" cy="90" r="1" fill="#7f1d1d" opacity="0.2"/>
            </svg>
          </div>
          
          <div className="absolute top-26 left-4 w-1.5 h-20 z-10">
            <svg viewBox="0 0 15 150" className="w-1.5 h-20">
              <ellipse cx="7.5" cy="0" rx="5" ry="8" fill="#dc2626" opacity="0.6"/>
              <ellipse cx="7.5" cy="10" rx="4" ry="20" fill="#b91c1c" opacity="0.7"/>
              <ellipse cx="7.5" cy="35" rx="3" ry="25" fill="#991b1b" opacity="0.5"/>
              <ellipse cx="7.5" cy="70" rx="2.5" ry="18" fill="#7f1d1d" opacity="0.6"/>
              <ellipse cx="7.5" cy="100" rx="2" ry="12" fill="#991b1b" opacity="0.4"/>
              <ellipse cx="7.5" cy="125" rx="1.5" ry="8" fill="#7f1d1d" opacity="0.3"/>
              <circle cx="7.5" cy="140" r="1" fill="#991b1b" opacity="0.2"/>
            </svg>
          </div>
          
          {/* Small paint drops scattered around */}
          <div className="absolute top-20 left-32 w-1 h-1">
            <circle cx="2" cy="2" r="2" fill="#991b1b" opacity="0.6"/>
          </div>
          <div className="absolute top-35 left-2 w-1 h-1">
            <circle cx="2" cy="2" r="1.5" fill="#7f1d1d" opacity="0.5"/>
          </div>
          <div className="absolute top-25 left-28 w-1 h-1">
            <circle cx="2" cy="2" r="1.8" fill="#dc2626" opacity="0.4"/>
          </div>
          <div className="absolute top-40 left-12 w-1 h-1">
            <circle cx="2" cy="2" r="1.2" fill="#b91c1c" opacity="0.5"/>
          </div>
        </div>

        {/* Market Data Strips */}
        <div className="absolute top-0 left-0 right-0 market-data p-2 text-xs overflow-hidden">
          <div className="animate-ticker whitespace-nowrap">
            <span className="inline-block mr-8">📈 QCS Portfolio: +15.7% YTD</span>
            {sampleStock && (
              <span className="inline-block mr-8">
                💹 {sampleStock.symbol}: ${sampleStock.price} ({sampleStock.percent})
              </span>
            )}
            <span className="inline-block mr-8">🏆 Trading Competition: Live</span>
            <span className="inline-block mr-8">🎯 Success Rate: 87.3%</span>
            {stockData.length > 1 && (
              <span className="inline-block mr-8">
                📊 {stockData[1].symbol}: ${stockData[1].price} ({stockData[1].percent})
              </span>
            )}
          </div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Animated Logo Container */}
          <div className="mb-12 relative">
            <div className="animate-zoom-in relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/9772a82c-c65c-4bc3-9535-e13d9f2ccf3b.png" 
                alt="Quantum Capital Society Logo"
                className="relative mx-auto w-32 h-32 md:w-48 md:h-48 object-contain shadow-glow animate-trading-glow"
              />
            </div>
            
            {/* Performance Indicators */}
            <div className="absolute -top-4 -right-4 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/50 animate-bounce-soft">
              <Activity className="inline w-4 h-4 mr-1 text-green-400" />
              <span className="text-green-400 text-sm font-mono">LIVE</span>
            </div>
          </div>
          
          {/* Enhanced Title with Trading Theme */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Quantum Capital Society
            </h1>
            
            {/* Trading Performance Bar */}
            <div className="flex justify-center mb-6">
              <div className="trading-terminal px-6 py-2 rounded-lg animate-fade-in-delay">
                <div className="flex items-center space-x-6 text-sm font-mono">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-accent">ROI: +247%</span>
                  </div>
                  <div className="text-white/70">|</div>
                  <div className="text-accent">Members: 156</div>
                  <div className="text-white/70">|</div>
                  <div className="text-accent">Trades: 2,847</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Subtitle */}
          <h2 className="text-xl md:text-2xl text-accent mb-8 animate-fade-in-delay animate-pulse-gold">
            Building the Next Generation of Student Traders & Quants
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
            Student Association at ESCP • Hedge Fund • Trading • Finance • Engineering
          </p>
          
          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gold-gradient text-primary font-semibold px-8 py-4 text-lg shadow-gold quantum-hover animate-glow transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('application')}
            >
              Join Our Society
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-primary font-semibold px-8 py-4 text-lg animate-trading-glow transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('about')}
            >
              View Performance
            </Button>
          </div>
          
          {/* Scroll Indicator with Animation */}
          <div className="flex flex-col items-center animate-bounce mb-8">
            <span className="text-accent text-sm mb-2 animate-pulse">Explore</span>
            <ArrowDown className="w-6 h-6 text-accent" />
          </div>
        </div>
      </section>
      
      {/* Stock Ticker */}
      <StockTicker />
    </>
  );
};

export default HeroSection;

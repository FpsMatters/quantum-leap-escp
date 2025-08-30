import { Button } from "@/components/ui/button";
import { ArrowDown, Activity, TrendingUp } from "lucide-react";
import FloatingElements from "./FloatingElements";
import StockTicker from "./StockTicker";
import tradingFloorImage from "@/assets/trading-floor.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen bg-quantum-gradient relative overflow-hidden flex items-center justify-center">
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
        
        {/* Market Data Strips */}
        <div className="absolute top-0 left-0 right-0 market-data p-2 text-xs overflow-hidden">
          <div className="animate-ticker whitespace-nowrap">
            <span className="inline-block mr-8">📈 QCS Portfolio: +15.7% YTD</span>
            <span className="inline-block mr-8">💹 VIX: 18.42 (-0.23)</span>
            <span className="inline-block mr-8">🏆 Trading Competition: Live</span>
            <span className="inline-block mr-8">🎯 Success Rate: 87.3%</span>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gold-gradient text-primary font-semibold px-8 py-4 text-lg shadow-gold quantum-hover animate-glow"
            >
              Join Our Society
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-primary font-semibold px-8 py-4 text-lg animate-trading-glow"
            >
              View Performance
            </Button>
          </div>
          
          {/* Scroll Indicator with Animation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center animate-bounce">
              <span className="text-accent text-sm mb-2 animate-pulse">Explore</span>
              <ArrowDown className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stock Ticker */}
      <StockTicker />
    </>
  );
};

export default HeroSection;
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

const TradingTerminal = () => {
  const [prices, setPrices] = useState({
    SP500: 4389.45,
    NASDAQ: 13847.73,
    DOW: 34521.23,
    BTC: 42847.12,
    EUR: 1.0856,
    GOLD: 1967.45
  });

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => ({
        SP500: prev.SP500 + (Math.random() - 0.5) * 5,
        NASDAQ: prev.NASDAQ + (Math.random() - 0.5) * 20,
        DOW: prev.DOW + (Math.random() - 0.5) * 50,
        BTC: prev.BTC + (Math.random() - 0.5) * 500,
        EUR: prev.EUR + (Math.random() - 0.5) * 0.01,
        GOLD: prev.GOLD + (Math.random() - 0.5) * 10
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number, decimals = 2) => {
    return price.toFixed(decimals);
  };

  const getChangeColor = () => {
    return Math.random() > 0.5 ? 'text-green-400' : 'text-red-400';
  };

  return (
    <Card className="trading-terminal p-6 font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-accent font-bold">LIVE MARKET DATA</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-xs">REAL-TIME</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-1">
          <div className="text-white/60">S&P 500</div>
          <div className="text-accent text-lg animate-pulse-gold">
            {formatPrice(prices.SP500)}
          </div>
          <div className={`text-xs ${getChangeColor()}`}>+0.45%</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">NASDAQ</div>
          <div className="text-accent text-lg animate-pulse-gold">
            {formatPrice(prices.NASDAQ)}
          </div>
          <div className={`text-xs ${getChangeColor()}`}>+1.23%</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">DOW</div>
          <div className="text-accent text-lg animate-pulse-gold">
            {formatPrice(prices.DOW)}
          </div>
          <div className={`text-xs ${getChangeColor()}`}>-0.12%</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">BTC/USD</div>
          <div className="text-accent text-lg animate-pulse-gold">
            {formatPrice(prices.BTC)}
          </div>
          <div className={`text-xs ${getChangeColor()}`}>+2.87%</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">EUR/USD</div>
          <div className="text-accent text-lg animate-pulse-gold">
            {formatPrice(prices.EUR, 4)}
          </div>
          <div className={`text-xs ${getChangeColor()}`}>+0.34%</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">GOLD</div>
          <div className="text-accent text-lg animate-pulse-gold">
            {formatPrice(prices.GOLD)}
          </div>
          <div className={`text-xs ${getChangeColor()}`}>+1.67%</div>
        </div>
      </div>
    </Card>
  );
};

export default TradingTerminal;
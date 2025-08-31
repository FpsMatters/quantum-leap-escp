import { Card } from "@/components/ui/card";
import useMarketData from "@/hooks/useMarketData";

const TradingTerminal = () => {
  const { marketData, loading, error, lastUpdate } = useMarketData();

  const formatPrice = (price: number, decimals = 2) => {
    return price.toFixed(decimals);
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const formatChange = (change: number) => {
    return change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2);
  };

  const formatChangePercent = (changePercent: number) => {
    return changePercent >= 0 ? `+${changePercent.toFixed(2)}%` : `${changePercent.toFixed(2)}%`;
  };

  if (loading && marketData.length === 0) {
    return (
      <Card className="trading-terminal p-6 font-mono text-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-accent font-bold">LIVE MARKET DATA</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 text-xs">LOADING...</span>
          </div>
        </div>
        <div className="text-center text-white/60 py-8">
          Loading market data...
        </div>
      </Card>
    );
  }

  if (error && marketData.length === 0) {
    return (
      <Card className="trading-terminal p-6 font-mono text-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-accent font-bold">LIVE MARKET DATA</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-xs">ERROR</span>
          </div>
        </div>
        <div className="text-center text-red-400 py-8">
          {error}
        </div>
      </Card>
    );
  }

  return (
    <Card className="trading-terminal p-6 font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-accent font-bold">LIVE MARKET DATA</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <span className="text-red-400 text-xs">TEMPORARILY DOWN</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-1">
          <div className="text-white/60">S&P 500</div>
          <div className="text-accent text-lg animate-pulse-gold">
            Temporarily Down
          </div>
          <div className="text-xs text-white/40">Service Unavailable</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">NASDAQ</div>
          <div className="text-accent text-lg animate-pulse-gold">
            Temporarily Down
          </div>
          <div className="text-xs text-white/40">Service Unavailable</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">DOW</div>
          <div className="text-accent text-lg animate-pulse-gold">
            Temporarily Down
          </div>
          <div className="text-xs text-white/40">Service Unavailable</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">BTC/USD</div>
          <div className="text-accent text-lg animate-pulse-gold">
            Temporarily Down
          </div>
          <div className="text-xs text-white/40">Service Unavailable</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">EUR/USD</div>
          <div className="text-accent text-lg animate-pulse-gold">
            Temporarily Down
          </div>
          <div className="text-xs text-white/40">Service Unavailable</div>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/60">GOLD</div>
          <div className="text-accent text-lg animate-pulse-gold">
            Temporarily Down
          </div>
          <div className="text-xs text-white/40">Service Unavailable</div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="text-xs text-white/40 text-center">
          Market data service temporarily unavailable
        </div>
      </div>
    </Card>
  );
};

export default TradingTerminal;

import useStockData from "@/hooks/useStockData";

const StockTicker = () => {
  const { stockData, loading, error } = useStockData();

  if (loading) {
    return (
      <div className="bg-quantum-gradient py-4 overflow-hidden border-y-2 border-accent/30">
        <div className="text-center text-white font-mono">
          <span className="animate-pulse">Loading live market data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-quantum-gradient py-4 overflow-hidden border-y-2 border-accent/30">
        <div className="text-center text-white font-mono">
          <span className="text-red-400">Market data temporarily unavailable</span>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-quantum-gradient py-4 overflow-hidden border-y-2 border-accent/30">
      <div className="animate-ticker whitespace-nowrap">
        <div className="inline-flex items-center space-x-4">
          {/* Duplicate the stock data to create seamless scrolling */}
          {[...stockData, ...stockData].map((stock, index) => (
            <div key={`${stock.symbol}-${index}`} className="flex items-center space-x-2 text-white font-mono">
              <span className="font-bold text-accent">{stock.symbol}</span>
              <span className="text-lg">${stock.price}</span>
              <span className={`text-sm ${stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stock.change} ({stock.percent})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockTicker;

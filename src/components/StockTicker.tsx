const stockData = [
  { symbol: "AAPL", price: "175.43", change: "+2.34", percent: "+1.35%" },
  { symbol: "GOOGL", price: "142.87", change: "+1.92", percent: "+1.36%" },
  { symbol: "MSFT", price: "378.85", change: "-0.45", percent: "-0.12%" },
  { symbol: "TSLA", price: "248.42", change: "+15.67", percent: "+6.73%" },
  { symbol: "NVDA", price: "456.78", change: "+8.34", percent: "+1.86%" },
  { symbol: "META", price: "334.12", change: "-2.87", percent: "-0.85%" },
  { symbol: "AMZN", price: "145.67", change: "+3.21", percent: "+2.25%" },
  { symbol: "NFLX", price: "487.93", change: "+12.45", percent: "+2.62%" }
];

const StockTicker = () => {
  return (
    <div className="bg-quantum-gradient py-4 overflow-hidden border-y-2 border-accent/30">
      <div className="animate-ticker whitespace-nowrap">
        <div className="inline-flex items-center space-x-8">
          {[...stockData, ...stockData].map((stock, index) => (
            <div key={index} className="flex items-center space-x-2 text-white font-mono">
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
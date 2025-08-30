import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const chartData = [
  { time: '09:30', price: 4235 },
  { time: '10:00', price: 4245 },
  { time: '10:30', price: 4267 },
  { time: '11:00', price: 4254 },
  { time: '11:30', price: 4289 },
  { time: '12:00', price: 4301 },
  { time: '12:30', price: 4286 },
  { time: '13:00', price: 4315 },
  { time: '13:30', price: 4334 },
  { time: '14:00', price: 4342 },
  { time: '14:30', price: 4358 },
  { time: '15:00', price: 4371 },
  { time: '15:30', price: 4356 },
  { time: '16:00', price: 4389 }
];

interface TradingChartProps {
  title?: string;
  className?: string;
}

const TradingChart = ({ title = "S&P 500 Index", className = "" }: TradingChartProps) => {
  return (
    <div className={`chart-container p-6 rounded-xl border border-accent/20 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center space-x-4">
          <span className="text-accent font-mono text-lg">4,389.45</span>
          <span className="text-green-400 font-mono text-sm">+23.67 (+0.54%)</span>
        </div>
      </div>
      
      <div className="h-64 animate-chart-draw">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(45, 93%, 58%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(45, 93%, 58%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(45, 93%, 58%, 0.1)" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(45, 93%, 58%)" 
              fontSize={12}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              stroke="hsl(45, 93%, 58%)" 
              fontSize={12}
              axisLine={false}
              tickLine={false}
              domain={['dataMin - 10', 'dataMax + 10']}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="hsl(45, 93%, 58%)"
              strokeWidth={2}
              fill="url(#goldGradient)"
              strokeDasharray="5 5"
              strokeDashoffset="0"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TradingChart;
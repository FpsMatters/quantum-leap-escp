import { DollarSign, TrendingUp, BarChart3, PieChart, Activity } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0s' }}>
        <DollarSign className="w-8 h-8 text-accent/30" />
      </div>
      
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <TrendingUp className="w-10 h-10 text-accent/20 animate-pulse-slow" />
      </div>
      
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <BarChart3 className="w-6 h-6 text-accent/40" />
      </div>
      
      <div className="absolute top-1/3 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
        <PieChart className="w-12 h-12 text-accent/15 animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '3s' }}>
        <Activity className="w-8 h-8 text-accent/25 animate-pulse" />
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 border-2 border-accent/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-accent/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-accent/20 to-transparent rounded-lg animate-pulse"></div>
      
      {/* Moving Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(45, 93%, 58%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        <path
          d="M 0 50 Q 300 20 600 80 T 1200 60"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-chart-draw"
          strokeDasharray="5 5"
        />
        
        <path
          d="M 0 150 Q 400 100 800 200 T 1600 180"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-chart-draw"
          strokeDasharray="3 3"
          style={{ animationDelay: '1s' }}
        />
      </svg>
      
      {/* Particles */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
import { Card } from "@/components/ui/card";
import TradingChart from "./TradingChart";
import financialChartsImage from "@/assets/financial-charts.jpg";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${financialChartsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            variants={itemVariants}
          >
            About <span className="text-accent animate-pulse-gold">Quantum Capital Society</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We are the premier student-led trading and quantitative finance society at ESCP, 
            dedicated to bridging the gap between academic theory and real-world financial markets.
          </motion.p>
        </motion.div>
        
        {/* Performance Dashboard */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {[
            { title: "Annual Return", value: "coming soon..", icon: "📈" },
            { title: "Win Rate", value: "coming soon..", icon: "🎯" },
            { title: "Active Members", value: "4", icon: "👥" },
            { title: "Total Trades", value: "coming soon..", icon: "💹" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="p-6 text-center trading-terminal">
                <motion.div 
                  className="text-3xl mb-2"
                  initial={{ rotateY: 0 }}
                  whileInView={{ rotateY: 360 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl font-bold text-accent font-mono">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.title}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={slideInLeft}>
              <Card className="p-8 shadow-quantum gold-hover">
                <motion.h3 
                  className="text-2xl font-bold text-primary mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our Mission
                </motion.h3>
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  To cultivate the next generation of quantitative traders and financial engineers by providing 
                  hands-on experience with cutting-edge trading technologies, market analysis techniques, and 
                  risk management strategies. We bridge theoretical knowledge with practical application 
                  through real-world trading simulations and industry partnerships.
                </motion.p>
              </Card>
            </motion.div>
            
            <motion.div variants={slideInLeft}>
              <Card className="p-8 shadow-quantum gold-hover">
                <motion.h3 
                  className="text-2xl font-bold text-primary mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our Vision
                </motion.h3>
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  To become Europe's leading student trading society, recognized for producing exceptional 
                  quantitative analysts and traders who drive innovation in financial markets. We envision 
                  a community where students master both the art of trading and the strategic execution 
                  through compounding to accelerate the growth of your professional investment portfolios. 
                </motion.p>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* Trading Chart */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
            >
              <TradingChart 
                title="Portfolio Performance (YTD)" 
                className="animate-trading-glow"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

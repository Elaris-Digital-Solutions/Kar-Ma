import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector('.segment-cards');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/assets/hero-image.jpg" 
          alt="Salinas de Kar & Ma" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary-dark/80" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
        {/* Partículas sutiles animadas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * windowSize.height],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center min-h-screen justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center mt-20 mb-10"
        >
          <div className="max-w-4xl w-full">
            <img 
              src="/assets/kar-ma.png" 
              alt="Kar & Ma" 
              className="h-64 md:h-96 lg:h-[100px] w-auto mx-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent px-4">
            Excelencia en sal retail e industrial
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed px-4"
        >
          Consorcio con 25 años de experiencia produciendo sal para empresas e industria local
        </motion.p>

        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 w-full max-w-2xl"
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Contáctanos
            </Button>
            <Button 
              onClick={scrollToNext}
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Conoce nuestros productos
            </Button>
          </motion.div>

          {/* Descubre más centrado debajo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={scrollToNext}
          >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-2"
              >
              <span className="text-sm font-medium text-white">Descubre más</span>
              <ChevronDown className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
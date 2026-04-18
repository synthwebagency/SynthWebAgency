import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Global variable to track if the intro has already played during this session
let hasPlayedSinceLastRefresh = false;

export default function CinematicIntro() {
  const { scrollY } = useScroll();
  const location = useLocation();
  
  // Only play if on home page AND it hasn't played since the last full page refresh
  const [shouldRender, setShouldRender] = useState(() => {
    const isHome = window.location.pathname === '/';
    const canPlay = !hasPlayedSinceLastRefresh;
    return isHome && canPlay;
  });

  // Track the actual visibility state independently of rendering
  // This prevents the intro from "coming back" when scrolling up
  const [isDismissed, setIsDismissed] = useState(false);

  // Animation transforms
  const synthX = useTransform(scrollY, [0, 400], [0, -1000]);
  const webX = useTransform(scrollY, [0, 400], [0, 1000]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  useEffect(() => {
    if (!shouldRender || isDismissed) return;

    // Force top on initial load if intro is showing
    window.scrollTo(0, 0);

    const unsubscribe = scrollY.on('change', (v) => {
      // Once they scroll deep enough, we mark it as dismissed
      // This prevents it from appearing again even if they scroll back up
      if (v > 500) {
        setIsDismissed(true);
        hasPlayedSinceLastRefresh = true;
      }
    });

    return () => unsubscribe();
  }, [scrollY, shouldRender, isDismissed]);

  // If we shouldn't render or the user has already scrolled past, return null
  if (!shouldRender || isDismissed) return null;

  return (
    <motion.div 
      style={{ opacity }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center pointer-events-none select-none"
    >
      <motion.div 
        style={{ scale }}
        className="flex flex-col items-center text-center px-6"
      >
        {/* Main Title with Mask Effect */}
        <div className="overflow-hidden">
          <div className="flex text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-display font-black tracking-tighter uppercase text-black leading-[0.85]">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
              className="flex"
            >
              <motion.span style={{ x: synthX }}>SYNTH</motion.span>
              <motion.span style={{ x: webX }}>WEB</motion.span>
            </motion.div>
          </div>
        </div>
        
        {/* Tagline Animation */}
        <div className="overflow-hidden mt-8 md:mt-12">
          <motion.p 
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            className="text-lg sm:text-xl md:text-3xl font-medium tracking-tight text-black flex items-center gap-1.5 md:gap-3 flex-wrap justify-center"
          >
            <span>the</span>
            <span className="text-navy font-black uppercase italic tracking-widest relative">
              fastest
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-navy origin-left"
              />
            </span>
            <span>website designer in Mozambique</span>
          </motion.p>
        </div>
      </motion.div>

      {/* Subtle Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-3"
      >
        <span className="text-black text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to start</span>
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-black/50"
        />
      </motion.div>
    </motion.div>
  );
}

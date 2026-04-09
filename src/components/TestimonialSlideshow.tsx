import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  link: string;
  review: string;
  logo: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Gymo-Academia',
    link: 'https://gymo-academia.vercel.app/',
    review: '"We admire Synth Web for the website. We all love it so much."',
    logo: '/images/gymo-logo.jpg',
    stars: 5,
  },
  {
    id: 2,
    name: 'Moz-Artez',
    link: 'https://moz-artez.vercel.app',
    review: '"I love the website. It showcases our products well."',
    logo: '/images/moz-logo.jpg',
    stars: 5,
  },
];

export default function TestimonialSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto px-4 py-12"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="relative h-[400px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="absolute w-full"
          >
            <div className="glass p-8 md:p-12 rounded-[2rem] relative group hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-500">
              {/* Client Logo - Floating Animation */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-white/10 glass p-2"
              >
                <img 
                  src={testimonials[currentIndex].logo} 
                  alt={`${testimonials[currentIndex].name} logo`}
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="flex flex-col gap-6 max-w-[80%]">
                {/* Stars - Sequential Animation */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <Star 
                        size={20} 
                        className={cn(
                          "fill-yellow-500 text-yellow-500 transition-all duration-300",
                          "group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                        )} 
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl font-display font-medium italic leading-relaxed text-white/90"
                >
                  {testimonials[currentIndex].review}
                </motion.p>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <a 
                    href={testimonials[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-bold text-white/70 hover:text-white transition-colors group/link"
                  >
                    {testimonials[currentIndex].name}
                    <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

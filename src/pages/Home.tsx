import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Layout, Settings, Star, Quote } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Design & Development',
    description: 'Full custom website creation using modern frameworks and high-end design principles.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Deployment & Setup',
    description: 'Complete handling of launching the website including hosting, domain connection, and going live.',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Maintenance & Management',
    description: 'Ongoing support including updates, bug fixes, monitoring, and content adjustments.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    text: 'Synth Web transformed our online presence. The design is clean, professional, and exactly what we needed.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Tech Startup Founder',
    text: 'Gabriella was fast with her work and delivered the site in 24 hours!',
    rating: 5,
  },
];

export default function Home() {
  useEffect(() => {
    const initTranslate = () => {
      // @ts-ignore
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        // @ts-ignore
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,pt',
          // @ts-ignore
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
      }
    };

    // If already loaded
    initTranslate();

    // In case script loads later
    window.addEventListener('load', initTranslate);
    return () => window.removeEventListener('load', initTranslate);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-end justify-center pb-12 overflow-hidden">
        {/* Interactive 3D Background */}
        <div className="absolute inset-0 z-0 bg-navy">
          <div className="absolute inset-0 bg-navy/20 z-10 pointer-events-none" />
          <Spline 
            className="w-full h-full"
            scene="https://prod.spline.design/NaxbxvWCDgZKMinx/scene.splinecode" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 z-20 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              <Link to="/contact" className="btn-primary flex items-center gap-3">
                Get Started <ArrowRight size={20} />
              </Link>
              <div id="google_translate_element" className="translate-widget-home"></div>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight uppercase tracking-tighter">
              ELEVATE YOUR <br /> BRAND ONLINE
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-white/60 text-lg leading-relaxed">
                Don’t settle for ordinary websites anymore, work with Synth Web. We believe that a website is more than just a digital address. It's the face and future of your business, a powerful tool for growth, and a reflection of your commitment to quality.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Based in Mozambique and other African countries like: Malawi , Zimbabwe and South Africa. We specialize in creating premium digital experiences that are fast, responsive, and tailored to your unique needs.
              </p>
            </div>
            <Link to="/who-we-are" className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300">
              Learn more about us <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video glass rounded-3xl overflow-hidden group"
          >
            <img
              src="/home-hero.jpg"
              alt="Synth Web Office"
              className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center animate-bounce">
                <Globe className="text-navy w-10 h-10" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logo Carousel */}
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-12 sm:gap-24 whitespace-nowrap"
          >
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-12 sm:gap-24 items-center"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <img 
                  key={i} 
                  src={`/logo-${i}.png`} 
                  alt={`Partner Logo ${i}`} 
                  className="h-8 md:h-12 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              ))}
              {/* Duplicate for infinite loop */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <img 
                  key={`dup-${i}`} 
                  src={`/logo-${i}.png`} 
                  alt={`Partner Logo ${i}`} 
                  className="h-8 md:h-12 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">OUR CORE SERVICES</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              We provide end-to-end solutions to ensure your business stands out in the digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-3xl flex flex-col gap-6 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
              Explore all services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="py-24 px-6 bg-navy-dark">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold">WHAT OUR CLIENTS SAY</h2>
              <p className="text-white/50 max-w-xl">
                Don't just take our word for it. Here's what some of our satisfied clients have to say about working with Synth Web.
              </p>
            </div>
            <Link to="/testimonials" className="btn-secondary">
              View All Reviews
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-3xl flex flex-col gap-8 relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-white text-white" />
                  ))}
                </div>
                <p className="text-xl italic leading-relaxed text-white/80 z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 z-10">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-white/50">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent z-0" />
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter z-10">
            READY TO START YOUR <br /> DIGITAL JOURNEY?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl z-10">
            Join the growing list of businesses that have elevated their online presence with Synth Web. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
            <Link to="/contact" className="btn-primary">
              Get Started Now
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

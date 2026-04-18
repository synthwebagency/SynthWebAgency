import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import TestimonialSlideshow from '@/src/components/TestimonialSlideshow';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    text: 'Synth Web transformed our online presence. The design is clean, professional, and exactly what we needed. Their attention to detail and commitment to our vision was truly exceptional.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tech Startup Founder',
    text: 'Gabriella was fast with her work and delivered the site in 24 hours!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    text: 'Working with Synth Web was a breeze. They are professional, efficient, and their designs are simply stunning. Highly recommended for any business looking to elevate their digital presence.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=emily',
  },
  {
    id: 4,
    name: 'David Smith',
    role: 'Real Estate Agent',
    text: 'The team at Synth Web is top-notch. They delivered a high-end, minimal website that has already helped us gain more online visibility and grow our business. Truly a great partner.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=david',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col pt-32">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="px-4 py-1 glass rounded-full text-sm font-medium tracking-widest uppercase text-white/70">
              Client Reviews
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight max-w-4xl">
              WHAT OUR <span className="text-white/50">CLIENTS</span> SAY
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Don't just take our word for it. Here's what some of our satisfied clients have to say about working with Synth Web.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Slideshow Section */}
      <section className="py-12 px-6 overflow-hidden">
        <TestimonialSlideshow />
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold">MORE SUCCESS STORIES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-3xl flex flex-col gap-8 relative overflow-hidden"
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-white text-white" />
                  ))}
                </div>
                <p className="text-lg italic leading-relaxed text-white/80 z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 z-10">
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
            READY TO BE OUR <br /> NEXT SUCCESS STORY?
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

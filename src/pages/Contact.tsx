import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    value: 'synthwebagency@gmail.com',
    link: 'mailto:synthwebagency@gmail.com',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    value: '+258 84 791 5746',
    link: 'tel:+258847915746',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    value: 'South Africa & Mozambique',
    link: '#',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Open Hours',
    value: 'Mon - Sat: 8:00 AM - 8:00 PM',
    subValue: 'Sunday: Closed',
    link: '#',
  },
];

export default function Contact() {
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
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight max-w-4xl">
              LET'S START A <span className="text-white/50">CONVERSATION</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Ready to elevate your digital presence? Reach out to us and let's discuss how we can transform your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-navy transition-all duration-500">
                {info.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-display font-bold">{info.title}</h3>
                <a 
                  href={info.link} 
                  className={cn(
                    "text-white/60 hover:text-white transition-colors",
                    info.link === '#' && "pointer-events-none"
                  )}
                >
                  {info.value}
                </a>
                {info.subValue && (
                  <span className="text-white/40 text-sm">{info.subValue}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Socials Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
              FOLLOW OUR <span className="text-white/50">JOURNEY</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-md mx-auto">
              Stay updated with our latest projects, design tips, and agency news by following us on social media.
            </p>
          </motion.div>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="w-20 h-20 glass rounded-3xl flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-500 group"
            >
              <Instagram size={40} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-500 group"
            >
              <Facebook size={40} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

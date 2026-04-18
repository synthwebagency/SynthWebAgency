import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Zap, Layout, DollarSign, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: <Zap className="text-white w-8 h-8" />,
    title: 'Fast Delivery',
    description: 'We understand that time is money. Our streamlined process ensures your website is delivered within 1 day to 1 week.',
  },
  {
    icon: <Layout className="text-white w-8 h-8" />,
    title: 'Classy Design',
    description: 'We specialize in professional, high-end, and minimal designs that reflect the quality of your brand.',
  },
  {
    icon: <DollarSign className="text-white w-8 h-8" />,
    title: 'Affordable Pricing',
    description: 'Our pricing models are designed to be accessible for small businesses without compromising on quality.',
  },
];

const pillars = [
  {
    title: 'Quality & Precision',
    description: 'Every pixel and every line of code is meticulously crafted to ensure a flawless user experience.',
  },
  {
    title: 'Client-Focused Service',
    description: 'We work closely with you to understand your goals and deliver a solution that exceeds your expectations.',
  },
  {
    title: 'Modern & Reliable',
    description: 'We use the latest technologies and frameworks to build websites that are fast, secure, and future-proof.',
  },
];

export default function WhoWeAre() {
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
              Our Identity
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight max-w-4xl">
              WE ARE <span className="text-white/50">SYNTH</span> WEB
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Empowering small businesses with a premium digital presence that commands attention and drives growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Message Section */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              HELPING YOU GAIN <br /> ONLINE VISIBILITY
            </h2>
            <div className="flex flex-col gap-6 text-white/60 text-lg leading-relaxed">
              <p>
                In today's digital age, your website is often the first point of contact between you and your potential customers. For small businesses, having a professional and classy online presence is no longer a luxury—it's a necessity.
              </p>
              <p>
                Synth Web was founded by Gabriella Stroh with a clear mission: to provide small businesses in Mozambique, South Africa, Malawi, and Zimbabwe with high-end web design services. She continues to build websites for businesses throughout Africa that are both efficient and affordable.
              </p>
              <p>
                We position ourselves as modern, efficient, and reliable partners in your digital journey. Our focus is on helping you stand out in a crowded marketplace with a website that is as functional as it is beautiful.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {['Professional', 'Classy', 'Efficient', 'Reliable'].map((tag) => (
                <div key={tag} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium">
                  <CheckCircle2 size={16} className="text-white/50" />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square glass rounded-[3rem] overflow-hidden group"
          >
            <img
              src="/who-we-are.png"
              alt="Our Vision"
              className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
            <div className="absolute bottom-12 left-12 right-12 flex flex-col gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <Target className="text-navy w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold">Our Vision</h3>
              <p className="text-white/70">To be the leading digital partner for small businesses across Southern Africa.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold">WHY CHOOSE US?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-3xl flex flex-col gap-6 hover:bg-white/10 transition-colors duration-300 group text-center items-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-bold">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-6 bg-navy-dark">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-display font-black text-white/5">0{index + 1}</span>
                  <h3 className="text-2xl font-display font-bold">{pillar.title}</h3>
                </div>
                <p className="text-white/50 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="glass p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-display font-bold">Ready to elevate your business?</h3>
              <p className="text-white/50">Let's discuss your project and how we can help you grow.</p>
            </div>
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              <Heart size={20} /> Work With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Layout, Zap, Settings, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-10 h-10" />,
    title: 'Design & Development',
    description: 'Full custom website creation using modern frameworks and high-end design principles. Focus on performance and responsiveness.',
    features: ['Custom UI/UX Design', 'Modern Frameworks', 'Responsive Layouts'],
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Deployment & Setup',
    description: 'Complete handling of launching the website including hosting, domain connection, and going live.',
    features: ['Hosting Configuration', 'Domain Connection', 'SSL Certificates', 'Go-Live Support'],
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: 'Maintenance & Management',
    description: 'Ongoing support including updates, bug fixes, monitoring, and content adjustments.',
    features: ['Regular Updates', 'Bug Fixes', 'Performance Monitoring', 'Content Adjustments'],
  },
  {
    icon: <RefreshCw className="w-10 h-10" />,
    title: 'Subscription Model',
    description: 'An all-inclusive monthly service providing continuous updates, support, and long-term reliability.',
    features: ['Continuous Updates', 'Ongoing Support', 'Long-term Reliability', 'Priority Assistance'],
  },
];

export default function Services() {
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
              Our Expertise
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight max-w-4xl">
              OUR <span className="text-white/50">SERVICES</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              We provide comprehensive digital solutions to help your business thrive in the modern online landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-12 rounded-[3rem] flex flex-col gap-8 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-6xl font-display font-black text-white/5">0{index + 1}</span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-display font-bold">{service.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{service.description}</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-white/30" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent z-0" />
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter z-10">
            READY TO ELEVATE <br /> YOUR BUSINESS?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl z-10">
            Let's discuss your project and how we can help you grow. Our team is ready to deliver a premium digital solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
            <Link to="/pricing" className="btn-primary flex items-center gap-2">
              View Pricing Plans <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

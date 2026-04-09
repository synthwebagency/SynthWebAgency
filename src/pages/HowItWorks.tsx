import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MessageSquare, Layout, CreditCard, FileText, Send, RefreshCw, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Discuss Requirements',
    description: 'We start by understanding your business goals, target audience, and specific requirements for your website.',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Design & Revision',
    description: 'We provide a custom layout and design based on your feedback. We revise until you are completely satisfied.',
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Purchase & Setup',
    description: 'Once the design is approved, the client purchases the website and domain to begin the deployment process.',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Invoice & Details',
    description: 'We send the website details and a professional invoice (PDF) for your records and payment.',
  },
  {
    icon: <Send className="w-8 h-8" />,
    title: 'Delivery & Launch',
    description: 'Your website is delivered and launched. We handle all technical aspects to ensure a smooth go-live.',
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: 'Ongoing Maintenance',
    description: 'If subscribed, we provide continuous maintenance, updates, and support to keep your website running perfectly.',
  },
];

export default function HowItWorks() {
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
              Our Process
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight max-w-4xl">
              HOW IT <span className="text-white/50">WORKS</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              A simple, transparent, and efficient process to get your business online with a premium digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative',
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
                  index !== 0 && 'lg:mt-[-40px]'
                )}
              >
                {/* Step Content */}
                <div className={cn(
                  'w-full lg:w-1/2 flex flex-col gap-4 glass p-10 rounded-[2.5rem] relative z-10',
                  index % 2 === 0 ? 'lg:text-right lg:items-end' : 'lg:text-left lg:items-start'
                )}>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-navy mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed max-w-md">{step.description}</p>
                </div>

                {/* Step Number Circle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-navy rounded-full hidden lg:flex items-center justify-center font-display font-bold text-lg z-20 border-8 border-navy">
                  {index + 1}
                </div>

                {/* Spacer for Desktop */}
                <div className="w-full lg:w-1/2 hidden lg:block" />
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
            READY TO START <br /> STEP ONE?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl z-10">
            Let's discuss your requirements and how we can help you grow. Our team is ready to deliver a premium digital solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
            <Link to="/pricing" className="btn-primary flex items-center gap-2">
              Get Started Now <ArrowRight size={20} />
            </Link>
            <a href="mailto:synthwebagency@gmail.com" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

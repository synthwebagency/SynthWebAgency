import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline depends on the complexity of the project. Typically, our process takes anywhere from 1 day to 1 week. We prioritize fast delivery without compromising on quality.',
  },
  {
    question: 'How much does a website cost?',
    answer: 'We offer two main pricing options: a Subscription Plan at R400/month (1500 MZN) or a Once-off Purchase at R1000 (3780 MZN). The once-off option excludes ongoing maintenance and updates.',
  },
  {
    question: 'What if I don’t have content?',
    answer: 'No problem! We can provide AI-generated or copyright-free images and text to help you get started. We also offer content creation services as part of our premium packages.',
  },
  {
    question: 'Can I request changes during development?',
    answer: 'Yes, absolutely. We provide daily updates during the development process and you can request changes at any time. We revise until you are completely satisfied with the result.',
  },
  {
    question: 'What is included in the subscription plan?',
    answer: 'The subscription plan includes custom animated backgrounds, custom cursors, monthly website report sheets, ongoing maintenance and support, seasonal updates, SEO optimization, and much more.',
  },
  {
    question: 'Do you provide domain and hosting services?',
    answer: 'Yes, we handle the complete process of launching your website, including hosting configuration and domain connection. Domains range from R200–R1000+ per year.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              Common Questions
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight max-w-4xl">
              FREQUENTLY ASKED <span className="text-white/50">QUESTIONS</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Find answers to the most common questions about our services, pricing, and process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'glass rounded-3xl overflow-hidden transition-all duration-300',
                openIndex === index ? 'bg-white/10 ring-1 ring-white/20' : 'hover:bg-white/5'
              )}
            >
              <button
                className="w-full p-8 flex items-center justify-between text-left gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold">{faq.question}</h3>
                <div className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
                  openIndex === index ? 'bg-white text-navy' : 'bg-white/10 text-white'
                )}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-white/60 text-lg leading-relaxed border-t border-white/5 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent z-0" />
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter z-10">
            STILL HAVE <br /> QUESTIONS?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl z-10">
            Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Email Us Directly <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

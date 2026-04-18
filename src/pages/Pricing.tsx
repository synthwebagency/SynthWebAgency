import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, ArrowRight, DollarSign, Globe, ShieldCheck } from 'lucide-react';

const subscriptionFeatures = [
  { text: 'Custom cursors' },
  { text: 'Custom images and text design' },
  { text: 'Monthly website report sheet' },
  { text: 'Ongoing maintenance and support' },
  { text: 'Website remains live and accessible' },
  { text: 'Seasonal updates' },
  { text: 'Surveys and quizzes' },
  { text: 'Discount tags' },
  { text: 'Integrated videos' },
  { text: 'Google Maps' },
  { text: 'Social media integration' },
  { text: 'Testimonials slider' },
  { text: 'Dark/light mode' },
  { text: 'Blog integration and setup' },
  { text: 'Gemini chatbot integration' },
  { text: '2 languages to add to the website' },
  { 
    text: 'Booking systems feature - ( Requires a google account with google calendar) This is a feature too add too your site if you require bookings.',
    isNew: true 
  },
  { 
    text: (
      <>
        3D objects or animated backgrounds- Take a look through <a href="https://spline.design/" target="_blank" rel="noopener noreferrer" className="font-bold underline text-white">Spline</a> animations and let us know which one youd like us too integrate
      </>
    ),
    isNew: true 
  },
  { 
    text: 'Custom videos ( Or videos we can find for you!)',
    isNew: true 
  },
];

export default function Pricing() {
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
              Pricing Plans
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight max-w-4xl">
              TRANSPARENT <span className="text-white/50">PRICING</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Choose the plan that best fits your business needs. We offer flexible options for every stage of your digital journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid Section */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Subscription Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[3rem] flex flex-col gap-8 relative overflow-hidden border-2 border-white/20"
          >
            <div className="absolute top-0 right-0 px-6 py-2 bg-white text-navy font-bold text-sm rounded-bl-2xl">
              MOST POPULAR
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-display font-bold uppercase tracking-widest">Subscription Plan</h3>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-extrabold tracking-tighter">R400</span>
                  <span className="text-white/50 text-xl">/ month</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-bold text-white/80">$25</span>
                  <span className="text-white/40 text-sm">/ month USD</span>
                </div>
                <p className="text-white/30 text-xs mt-1">(1500 MZN / month)</p>
              </div>
            </div>
            <div className="h-px bg-white/10 w-full" />
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-lg">What's Included:</h4>
              <ul className="grid grid-cols-1 gap-4">
                {subscriptionFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-white/50 flex-shrink-0 mt-0.5" />
                    <span className="flex-1">
                      {feature.isNew && <strong className="text-white mr-2">NEW!</strong>}
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 mt-8">
              Subscribe Now <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Website Purchase Option */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3rem] flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-display font-bold uppercase tracking-widest">Once-off Purchase</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-extrabold tracking-tighter">R1000</span>
                  <span className="text-white/50 text-xl">once-off</span>
                </div>
                <p className="text-white/50 text-sm">(3780 MZN once-off)</p>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <ShieldCheck className="text-white/50 flex-shrink-0" size={24} />
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Full Ownership</h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      You own the website entirely. Ideal for businesses with internal technical resources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-navy-dark/50 rounded-2xl border border-white/5">
                  <AlertCircle className="text-white/30 flex-shrink-0" size={24} />
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-white/70">Self-Hosted Responsibilities</h4>
                    <p className="text-white/30 text-sm leading-relaxed">
                      If self-hosted, the client is responsible for domain management, bugs, and maintenance. Optional continued support may be arranged separately.
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2 mt-8">
                Purchase Website <DollarSign size={20} />
              </Link>
            </motion.div>

            {/* Domain Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Globe className="text-white/50" size={24} />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-widest">Domain Information</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Domains range from <span className="text-white font-bold">R200–R1000+ per year</span>. Clients must contact us for availability and exact pricing based on the desired extension and name.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent z-0" />
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter z-10">
            NOT SURE WHICH <br /> PLAN IS RIGHT?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl z-10">
            Let's discuss your business goals and help you choose the best option for your digital growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
            <Link to="/contact" className="btn-primary">
              Get a Free Consultation
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

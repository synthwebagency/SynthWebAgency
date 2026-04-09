import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="flex flex-col pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">TERMS & CONDITIONS</h1>
          <p className="text-white/50 text-lg">Last updated: March 2026</p>
        </motion.div>

        <div className="glass p-12 rounded-[3rem] flex flex-col gap-10 text-white/70 leading-relaxed text-lg">
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">1. Business Information & Service Description</h2>
            <p>
              Synth Web, owned by Gabriella Stroh, provides premium website design, deployment, and management services. Our services are primarily digital and remote in nature, catering to small businesses in South Africa, Mozambique, and beyond.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">2. Pricing & Billing</h2>
            <p>
              We offer two main pricing models:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Subscription Plan: R400/month (1500 MZN/month). This includes ongoing maintenance, support, and updates.</li>
              <li>Once-off Purchase: R1000 (3780 MZN). This is a single payment for the website creation and delivery.</li>
            </ul>
            <p>
              Billing is handled electronically. Subscriptions are billed monthly in advance. Cancellation of a subscription requires 30 days' notice.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">3. Website Availability</h2>
            <p>
              For clients on the Subscription Plan, website availability and hosting depend on an active subscription. If a subscription is cancelled or payment is not received, the website may be taken offline.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">4. Scope of Work</h2>
            <p>
              The scope of work for each project is defined during the initial requirements discussion. Any changes requested after the design is approved may incur additional costs or extend the delivery timeline.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">5. Intellectual Property</h2>
            <p>
              The client retains ownership of all content provided to Synth Web for use on the website. If the website is purchased once-off, the client owns the final website product. Synth Web retains ownership of all internal systems, frameworks, and proprietary code used to build and manage the website.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">6. Limitation of Liability</h2>
            <p>
              Synth Web provides website design and management services and does not guarantee business results, search engine rankings, traffic, or revenue. We are not liable for any third-party service outages or issues beyond our direct control.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">7. Termination</h2>
            <p>
              Either party may terminate the agreement with 30 days' written notice. Upon termination, all outstanding payments must be settled.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of South Africa and Mozambique, as applicable to the specific service location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

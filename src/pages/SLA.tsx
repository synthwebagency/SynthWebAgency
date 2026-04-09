import { motion } from 'motion/react';

export default function SLA() {
  return (
    <div className="flex flex-col pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">SERVICE LEVEL AGREEMENT</h1>
          <p className="text-white/50 text-lg">Last updated: March 2026</p>
        </motion.div>

        <div className="glass p-12 rounded-[3rem] flex flex-col gap-10 text-white/70 leading-relaxed text-lg">
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">1. Services Covered Under Subscription</h2>
            <p>
              The Subscription Plan covers ongoing maintenance, support, and updates for your website. This includes:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Regular website updates and bug fixes</li>
              <li>Performance monitoring and optimization</li>
              <li>Content adjustments and seasonal updates</li>
              <li>Priority technical support</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">2. Maintenance & Support Scope</h2>
            <p>
              Maintenance and support are limited to the website's existing features and functionality. Any new features or significant design changes may be subject to additional costs.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">3. Response Times</h2>
            <p>
              We provide best-effort response times for all support requests. Typically, we respond within 24-48 hours during business days.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">4. Uptime Guarantees</h2>
            <p>
              Synth Web does not provide direct uptime guarantees as we rely on third-party hosting and infrastructure services. We will, however, work to resolve any issues within our control as quickly as possible.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">5. Client Responsibilities</h2>
            <p>
              Clients are responsible for providing all necessary content, images, and information required for the website. Clients must also ensure timely payment of subscriptions and domain renewals.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">6. Exclusions</h2>
            <p>
              The SLA does not cover issues caused by third-party services, client-side modifications, or any unauthorized changes to the website's code or configuration.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">7. Right to Update SLA</h2>
            <p>
              Synth Web reserves the right to update this Service Level Agreement at any time. Clients will be notified of any significant changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

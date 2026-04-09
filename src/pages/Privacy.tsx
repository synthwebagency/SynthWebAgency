import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="flex flex-col pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">PRIVACY POLICY</h1>
          <p className="text-white/50 text-lg">Last updated: March 2026</p>
        </motion.div>

        <div className="glass p-12 rounded-[3rem] flex flex-col gap-10 text-white/70 leading-relaxed text-lg">
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">1. Data Collected</h2>
            <p>
              We collect personal information that you provide to us directly through our contact forms, email communications, and other interactions. This may include your name, email address, phone number, and business details.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">2. How Data is Used</h2>
            <p>
              We use the collected data to provide our services, communicate with you, process payments, and improve our offerings. We do not sell your personal data to third parties.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">3. Secure Storage</h2>
            <p>
              We implement appropriate technical and organizational measures to ensure the security of your personal data. We use secure servers and encryption where necessary to protect your information.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">4. Third-Party Tools</h2>
            <p>
              We may use third-party tools for analytics, payment processing, and other business functions. These tools have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">5. Cookies & Analytics</h2>
            <p>
              Our website uses cookies to improve your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">6. User Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. You can also object to the processing of your data or request a copy of your information.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">7. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to provide our services and comply with legal obligations.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">8. External Links</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for the privacy practices or content of these third-party websites.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">9. Policy Updates</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-white">10. Contact for Privacy Concerns</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:synthwebagency@gmail.com" className="text-white underline">synthwebagency@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

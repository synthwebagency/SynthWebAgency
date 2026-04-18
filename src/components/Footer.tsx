import { Link } from 'react-router-dom';
import { Globe, Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Who We Are', path: '/who-we-are' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Pricing', path: '/pricing' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Testimonials', path: '/testimonials' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Service Level Agreement', path: '/sla' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 overflow-hidden">
              <img src="/images/logo.jpg" alt="Synth Web Logo" className="w-full h-full object-cover scale-125" referrerPolicy="no-referrer" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter">
              SYNTH<span className="text-white/50">WEB</span>
            </span>
          </Link>
          <p className="text-white/50 max-w-xs leading-relaxed">
            Premium web design agency delivering high-end, minimal, and professional websites for small businesses.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/258847915746" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
              <MessageCircle size={20} />
            </a>
            <a href="https://www.instagram.com/synthweb.agency?igsh=MnV6a3g1bm5lYjl6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/18EwCduyAW/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Links Sections */}
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            <h4 className="text-lg font-display font-bold">{section.title}</h4>
            <ul className="flex flex-col gap-4">
              {section.links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/50 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Section */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-display font-bold">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-white/50">
              <Mail size={18} className="text-white/30" />
              <a href="mailto:synthwebagency@gmail.com" className="hover:text-white transition-colors">
                synthwebagency@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/50">
              <Phone size={18} className="text-white/30" />
              <a href="tel:+258847915746" className="hover:text-white transition-colors">
                +258 84 791 5746
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/50">
              <MapPin size={18} className="text-white/30" />
              <span>Mozambique</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/30">
        <p>© {new Date().getFullYear()} Synth Web. All rights reserved.</p>
        <p className="text-center md:text-right italic">
          Synth Web provides website design and management services and does not guarantee business results, search engine rankings, traffic, or revenue.
        </p>
      </div>
    </footer>
  );
}

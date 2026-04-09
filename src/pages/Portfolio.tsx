import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Plus, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const projects = [
  {
    id: 1,
    title: 'Gymo-Academia (Portuguese)',
    category: 'Sports Academy',
    description: 'A high end, minimal platform for a sports academy.',
    image: '/images/portfolio-gymo.png',
    link: 'https://gymo-academia.vercel.app/',
    details: [
      'Custom design and development',
      'Interactive Layout',
      'Time taken to make: 7 hours'
    ]
  },
  {
    id: 2,
    title: 'Moz-Artez (English)',
    category: 'Art Portfolio',
    description: 'An artistic website built to show off incredible hand made art.',
    image: '/images/portfolio-moz.png',
    link: 'https://moz-artez.vercel.app/',
    details: [
      'Custom design and development',
      'Animated Slideshows',
      'Time taken to make: 15 hours'
    ]
  },
  {
    id: 3,
    title: 'Agri Plantagem (Portuguese)',
    category: 'Landscaping',
    description: 'A landscaping business offering their services on the Web.',
    image: '/images/portfolio-agri.png',
    link: 'https://agri-plantagem.vercel.app/',
    details: [
      'Google maps Integration',
      'Custom Brand colours',
      'Landing Page website',
      'Time taken to make: 1 hour'
    ]
  },
  {
    id: 4,
    title: 'The Nail Spa (Portuguese)',
    category: 'Beauty & Wellness',
    description: 'A sleek, gorgeous website for a premium nail salon.',
    image: '/images/portfolio-nail.png',
    link: 'https://nail-spa-phi.vercel.app/',
    details: [
      'Custom design',
      'Google maps Integration',
      'Animated texts and slideshows',
      'Time taken to make: 2 hours'
    ]
  },
  {
    id: 5,
    title: 'PSA Multiservice (Portuguese)',
    category: 'Services',
    description: 'A professional multi-service platform.',
    image: '/images/portfolio-5.png',
    link: 'https://psa-multiservice.vercel.app/',
    details: [
      'Responsive Layout',
      'Custom brand colours',
      'Time taken to make: 30 minutes'
    ]
  },
  {
    id: 6,
    title: 'Blush and Bloom Nail Studio (English)',
    category: 'Beauty',
    description: 'A creative and elegant nail studio website.',
    image: '/images/portfolio-6.png',
    link: 'https://blush-and-bloom-nail-studio.vercel.app/',
    details: [
      'Custom brand colours',
      'Creative Essay about Self',
      'Time taken to make: 30 minutes'
    ]
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              Our Work
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight max-w-4xl">
              OUR <span className="text-white/50">PORTFOLIO</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Showcasing our commitment to quality, precision, and client-focused service through a variety of digital projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass rounded-[2rem] overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-white font-bold text-sm">
                    View Details <Plus size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl glass rounded-[3rem] overflow-hidden flex flex-col md:flex-row"
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 glass rounded-full flex items-center justify-center text-white z-10 hover:bg-white hover:text-navy transition-all duration-300"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center gap-6">
              <span className="text-sm font-medium text-white/50 uppercase tracking-widest">{selectedProject.category}</span>
              <h2 className="text-4xl font-display font-bold">{selectedProject.title}</h2>
              <p className="text-white/60 text-lg leading-relaxed">{selectedProject.description}</p>
              <div className="flex flex-col gap-4 mt-4">
                {selectedProject.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <Plus size={18} className="text-white/30" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  Visit Website <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent z-0" />
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter z-10">
            WANT TO SEE YOUR <br /> PROJECT HERE?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl z-10">
            Let's discuss your vision and how we can bring it to life with a premium digital solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
            <Link to="/contact" className="btn-primary">
              Contact Sales
            </Link>
            <Link to="/contact" className="btn-secondary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

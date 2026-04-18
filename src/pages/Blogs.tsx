import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top Web Design Tools Every Designer Should Know',
    excerpt: 'A great designer isn’t just creative—they’re equipped. The right tools turn ideas into clean, functional, high-performing websites.',
    author: 'Gabriella',
    date: 'April 15, 2026',
    category: 'Tools',
    image: '/blog-2.jpg',
  },
  {
    id: 2,
    title: 'Why First Impressions Matter in Web Design (And How to Nail Them)',
    excerpt: 'When someone lands on your website, you have just a few seconds to make an impression. That moment decides whether they stay or leave.',
    author: 'Gabriella',
    date: 'April 10, 2026',
    category: 'Design',
    image: '/blog-3.jpg',
  },
  {
    id: 3,
    title: 'Top Web Design Tools Every Designer Should Know',
    excerpt: 'A great designer isn’t just creative—they’re equipped. The right tools turn ideas into clean, functional, high-performing websites.',
    author: 'Gabriella',
    date: 'April 05, 2026',
    category: 'Tools',
    image: '/blog-1.jpg',
  },
];

export default function Blogs() {
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
              Insights & News
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight max-w-4xl">
              OUR <span className="text-white/50">BLOGS</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Thoughts on design, technology, and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-24 px-6 bg-navy-light/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-[2rem] overflow-hidden group flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col gap-4 flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-white/40">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-white/60">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold leading-tight group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                      {post.author[0]}
                    </div>
                    <span className="text-sm text-white/60">{post.author}</span>
                  </div>
                  <Link to={`/blogs/${post.id}`} className="text-white hover:gap-3 transition-all flex items-center gap-2 font-bold text-sm">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

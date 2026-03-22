import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    date: "March 2025",
    category: "Food",
    title: "Why Our Brownie Oreo Shake is Deoghar's Most Loved Drink",
    excerpt: "It started as an experiment — a rich chocolate brownie blended with Oreo cookies and creamy milk. Now it's the drink everyone orders first.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
  },
  {
    date: "February 2025",
    category: "Salon",
    title: "The Art of the Perfect Blowout: Our Stylists Share Their Secrets",
    excerpt: "A great blowout isn't just about the hair dryer. Our expert stylists break down the technique, products, and timing that make all the difference.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
  },
  {
    date: "January 2025",
    category: "Experience",
    title: "Dine X Divine: Deoghar's First True Café & Salon Experience",
    excerpt: "When we opened our doors, we had one vision — to create a space where great food and great style could coexist. Here's how we made it happen.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  },
];

export default function BlogSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="blog" className="py-24 lg:py-32 bg-[oklch(0.1_0.01_40)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Stories & Updates</span>
            <div className="h-[1px] w-12 bg-gold/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            From Our Blog
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Stories, tips, and updates from the Dine X Divine team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[oklch(0.14_0.012_40)] rounded-2xl overflow-hidden border border-white/8 hover:border-gold/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-[oklch(0.08_0.01_40)]/40" />
                <span className="absolute top-3 left-3 bg-gold/90 text-[oklch(0.1_0.01_40)] text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3 h-3 text-gold/60" />
                  <span className="text-white/40 text-xs">{post.date}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-gold transition-colors" style={{ fontFamily: "Georgia, serif" }}>
                  {post.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-gold text-xs font-medium group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
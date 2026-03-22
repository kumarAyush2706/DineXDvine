import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajat Kumar",
    role: "Google Review",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "Very experience place and excellent food quality and service. The ambiance is top class and the staff is very attentive. Highly recommend to everyone in Deoghar.",
    source: "Google",
  },
  {
    name: "Ashish Kindo",
    role: "Google Review",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    text: "It is a restaurant where you can enjoy Indian, Chinese, and Continental foods. The variety is impressive and the quality is consistently good. A must-visit in Deoghar.",
    source: "Google",
  },
  {
    name: "Priya Sharma",
    role: "Zomato Review",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "The best restaurant in Deoghar with top class menu and taste. The ambience is very pleasant and the portion sizes are generous. The cold coffee is absolutely divine!",
    source: "Zomato",
  },
];

const platforms = [
  { name: "Google", rating: "4.4", reviews: "157" },
  { name: "Zomato", rating: "4.3", reviews: "720" },
  { name: "Swiggy", rating: "4.2", reviews: "107" },
  { name: "Justdial", rating: "4.4", reviews: "136" },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-[oklch(0.08_0.01_40)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">What Guests Say</span>
            <div className="h-[1px] w-12 bg-gold/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Guest Reviews
          </h2>

          {/* Platform ratings */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {platforms.map((p) => (
              <div key={p.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <span className="text-gold font-bold text-sm">{p.rating}★</span>
                <span className="text-white/50 text-xs">{p.name} · {p.reviews} reviews</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[oklch(0.14_0.012_40)] rounded-2xl p-7 border border-white/8 hover:border-gold/25 transition-colors duration-300"
            >
              <Quote className="w-7 h-7 text-gold/25 mb-4" />
              <p className="text-white/70 leading-relaxed mb-6 text-sm" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold/30"
                />
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
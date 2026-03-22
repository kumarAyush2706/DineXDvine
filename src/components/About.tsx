import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Clock, Users, Star, Scissors, UtensilsCrossed } from "lucide-react";

const stats = [
  { icon: Star, value: "4.4★", label: "Google Rating" },
  { icon: Users, value: "720+", label: "Zomato Reviews" },
  { icon: Clock, value: "11AM–10:30PM", label: "Open Daily" },
  { icon: Award, value: "Top Pick", label: "Deoghar's Finest" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 lg:py-32 bg-[oklch(0.08_0.01_40)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Our Story</span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            More Than Just a Place —<br />
            <span className="text-gold italic">An Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative h-130 rounded-2xl overflow-hidden shadow-2xl border border-gold/20">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Dine X Divine interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[oklch(0.08_0.01_40)]/30" />
              {/* Gold corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/60" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-52 h-52 rounded-2xl overflow-hidden shadow-xl border-2 border-gold/30 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
                alt="Food at Dine X Divine"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:pl-8"
          >
            {/* Dual identity */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                <UtensilsCrossed className="w-4 h-4 text-gold" />
                <span className="text-gold text-xs tracking-widest uppercase">Café & Restaurant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                <Scissors className="w-4 h-4 text-gold" />
                <span className="text-gold text-xs tracking-widest uppercase">Luxury Salon</span>
              </div>
            </div>

            <p className="text-white/90 text-lg leading-relaxed mb-5" style={{ fontFamily: "Georgia, serif" }}>
              Nestled in the heart of Bompas Town, Deoghar, Dine X Divine is where culinary excellence meets beauty and style. We are Deoghar's first true Café & Salon experience.
            </p>
            <p className="text-white/60 leading-relaxed mb-10 text-sm">
              From wood-fired pizzas, rich biryanis, and continental delights to premium hair and beauty services — we've crafted a space where you can indulge every sense. Come for the food, stay for the transformation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-4 border border-gold/15 rounded-xl bg-gold/5"
                >
                  <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <stat.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/50 tracking-wide">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
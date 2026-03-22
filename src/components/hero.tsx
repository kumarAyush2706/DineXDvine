import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Scissors, UtensilsCrossed } from "lucide-react";
import { Button } from "../components/ui/button";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[oklch(0.08_0.01_40)]">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
          y,
        }}
      />
      {/* Dark luxury overlay */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.01_40)]/75" />
      {/* Gold vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.08 0.01 40) 100%)"
      }} />
      {/* Subtle gold line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Dual identity badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-1.5">
            <UtensilsCrossed className="w-3 h-3 text-gold" />
            <span className="text-white/80 text-xs tracking-widest uppercase">Café & Restaurant</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gold/50" />
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-1.5">
            <Scissors className="w-3 h-3 text-gold" />
            <span className="text-white/80 text-xs tracking-widest uppercase">Luxury Salon</span>
          </div>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <div className="flex gap-0.5">
            {[1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
            <Star className="w-3.5 h-3.5 fill-gold/40 text-gold/40" />
          </div>
          <span className="text-white/60 text-xs tracking-wider">4.4 · 720+ Reviews · Deoghar</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-3 tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Dine X
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 tracking-tight text-gold"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
        >
          Divine
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-white/60 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed tracking-wide"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
        >
          "Treat yourself to the perfect blend of flavours and fabulousness — all at one place."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollTo("#reservations")}
            className="bg-gold text-[oklch(0.1_0.01_40)] hover:bg-[oklch(0.65_0.13_75)] px-10 py-3 text-sm font-semibold tracking-widest uppercase rounded-full h-auto border border-gold/50"
          >
            Book a Table
          </Button>
          <Button
            onClick={() => scrollTo("#menu")}
            variant="outline"
            className="border-white/30 text-white bg-transparent hover:bg-white/8 px-10 py-3 text-sm font-semibold tracking-widest uppercase rounded-full h-auto"
          >
            Explore Menu
          </Button>
        </motion.div>

        {/* Open status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 inline-flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open Daily · 11 AM – 10:30 PM · +91 88772 22288
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/50 hover:text-gold transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
    </section>
  );
}
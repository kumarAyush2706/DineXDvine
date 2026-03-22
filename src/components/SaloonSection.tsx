import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Scissors, Sparkles, Star, Clock } from "lucide-react";
import { Button } from "../components/ui/button";

const services = [
  {
    icon: Scissors,
    name: "Hair Styling",
    description: "Expert cuts, blowouts, and styling for all hair types. From classic to contemporary.",
    price: "From ₹299",
    duration: "45–90 min",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
  },
  {
    icon: Sparkles,
    name: "Hair Colour & Highlights",
    description: "Premium colour treatments, balayage, highlights, and full colour transformations.",
    price: "From ₹799",
    duration: "2–3 hrs",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
    tag: "Popular",
  },
  {
    icon: Star,
    name: "Facial & Skin Care",
    description: "Rejuvenating facials, clean-ups, and skin treatments for a radiant glow.",
    price: "From ₹499",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
  },
  {
    icon: Scissors,
    name: "Beard Grooming",
    description: "Precision beard trims, shaping, and hot towel shaves for the modern gentleman.",
    price: "From ₹199",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  },
  {
    icon: Sparkles,
    name: "Bridal Packages",
    description: "Complete bridal makeover packages — hair, makeup, and skin prep for your big day.",
    price: "From ₹3,999",
    duration: "Half day",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
    tag: "Premium",
  },
  {
    icon: Star,
    name: "Manicure & Pedicure",
    description: "Relaxing nail care treatments with premium products and expert technicians.",
    price: "From ₹349",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
  },
];

export default function SalonSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="salon" className="py-24 lg:py-32 bg-[oklch(0.08_0.01_40)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Beauty & Style</span>
            <div className="h-[1px] w-12 bg-gold/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Salon Services
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Premium beauty and grooming services by expert stylists — because you deserve to look as good as you feel.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[oklch(0.14_0.012_40)] rounded-2xl overflow-hidden border border-white/8 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-[oklch(0.08_0.01_40)]/40" />
                {service.tag && (
                  <span className="absolute top-3 left-3 bg-gold text-[oklch(0.1_0.01_40)] text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                    {service.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className="w-4 h-4 text-gold" />
                  <h3 className="text-base font-semibold text-white" style={{ fontFamily: "Georgia, serif" }}>{service.name}</h3>
                </div>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold text-sm">{service.price}</span>
                  <div className="flex items-center gap-1 text-white/40 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={() => {
              const el = document.querySelector("#reservations");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gold text-[oklch(0.1_0.01_40)] hover:bg-[oklch(0.65_0.13_75)] px-10 py-3 text-xs font-semibold tracking-widest uppercase rounded-full h-auto border border-gold/50"
          >
            Book a Salon Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
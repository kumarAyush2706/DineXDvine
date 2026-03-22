import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Dine X Divine ambiance",
    className: "col-span-2 row-span-2",
    label: "Our Space",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    alt: "Wood-fired pizza",
    className: "",
    label: "Pizzas",
  },
  {
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    alt: "Biryani",
    className: "",
    label: "Biryani",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Salon styling",
    className: "",
    label: "Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    alt: "Cold coffee",
    className: "",
    label: "Beverages",
  },
  {
    src: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
    alt: "Pasta",
    className: "",
    label: "Pasta",
  },
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[oklch(0.1_0.01_40)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Visual Journey</span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Gallery
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            A peek into the flavours, vibes, and moments that make Dine X Divine special.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl group border border-white/5 hover:border-gold/30 transition-colors duration-300 ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[oklch(0.08_0.01_40)]/30 group-hover:bg-[oklch(0.08_0.01_40)]/50 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-gold text-xs tracking-widest uppercase font-medium">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
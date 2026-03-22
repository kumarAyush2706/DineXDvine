import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Clock, Instagram, Scissors } from "lucide-react";

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-[oklch(0.08_0.01_40)]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold/50" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Find Us</span>
              <div className="h-[1px] w-12 bg-gold/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Contact & Location
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl overflow-hidden h-80 shadow-lg relative border border-gold/20"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[oklch(0.08_0.01_40)]/60 flex items-center justify-center">
                <div className="bg-[oklch(0.14_0.012_40)] rounded-xl px-6 py-5 text-center shadow-xl border border-gold/30">
                  <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-bold text-white text-sm" style={{ fontFamily: "Georgia, serif" }}>Dine X Divine</p>
                  <p className="text-white/50 text-xs mt-1">Infront of Kartikey Option Plaza</p>
                  <p className="text-white/50 text-xs">SSM Jalan Rd, Bompas Town, Deoghar</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/40" />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-5"
            >
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  lines: ["Infront of Kartikey Option Plaza", "SSM Jalan Rd, near Bajla Chowk", "Castairs Town, Bompas Town", "Deoghar, Jharkhand 814112"],
                },
                {
                  icon: Clock,
                  title: "Hours",
                  lines: ["Open Daily: 11:00 AM – 10:30 PM"],
                },
                {
                  icon: Phone,
                  title: "Phone",
                  lines: ["+91 88772 22288"],
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  lines: ["@thedinexdivine · 170+ followers"],
                },
              ].map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-4 p-4 bg-[oklch(0.14_0.012_40)] rounded-xl border border-white/8 hover:border-gold/25 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{title}</p>
                    {lines.map(l => <p key={l} className="text-white/50 text-xs">{l}</p>)}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.07_0.008_40)] border-t border-gold/15 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-widest uppercase" style={{ fontFamily: "Georgia, serif" }}>Dine X Divine</p>
                <p className="text-[10px] text-gold/60 tracking-[0.3em] uppercase">Café & Salon · Deoghar</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 text-xs text-white/40 tracking-widest uppercase">
              {[
                { label: "Menu", id: "#menu" },
                { label: "Salon", id: "#salon" },
                { label: "About", id: "#about" },
                { label: "Gallery", id: "#gallery" },
                { label: "Events", id: "#events" },
                { label: "Blog", id: "#blog" },
                { label: "Contact", id: "#contact" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    const el = document.querySelector(item.id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-gold transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} Dine X Divine
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
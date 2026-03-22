import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "../components/ui/button";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Salon", href: "#salon" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.1_0.01_40)]/95 backdrop-blur-md shadow-lg border-b border-[oklch(0.75_0.15_80)]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center border border-[oklch(0.75_0.15_80)]/50">
              <Scissors className="w-4 h-4 text-[oklch(0.1_0.01_40)]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-widest text-white uppercase">
                Dine X Divine
              </span>
              <span className="text-[9px] font-medium tracking-[0.35em] uppercase text-gold">
                Café & Salon · Deoghar
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs font-medium tracking-[0.15em] uppercase text-white/70 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollTo("#reservations")}
              className="bg-gold text-[oklch(0.1_0.01_40)] hover:bg-[oklch(0.65_0.13_75)] px-6 py-2 text-xs font-semibold tracking-widest uppercase rounded-full border border-gold/50"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[oklch(0.1_0.01_40)]/98 backdrop-blur-md border-b border-gold/20"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium tracking-widest uppercase text-white/70 hover:text-gold py-3 border-b border-white/5 last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("#reservations")}
                className="mt-3 bg-gold text-[oklch(0.1_0.01_40)] hover:bg-[oklch(0.65_0.13_75)] rounded-full text-xs tracking-widest uppercase font-semibold"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
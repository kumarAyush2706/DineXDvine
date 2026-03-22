import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, Users, Phone, Mail, CheckCircle, Scissors, UtensilsCrossed } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner";

export default function Reservations() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookingType, setBookingType] = useState<"dining" | "salon">("dining");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    service: "",
    notes: "",
  });

  const diningSlots = ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];
  const salonSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];
  const salonServices = ["Hair Cut & Styling", "Hair Colour", "Facial", "Beard Grooming", "Bridal Package", "Manicure & Pedicure"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success(bookingType === "dining" ? "Table booked! See you soon." : "Salon appointment confirmed!");
  };

  const timeSlots = bookingType === "dining" ? diningSlots : salonSlots;

  return (
    <section id="reservations" className="py-24 lg:py-32 bg-[oklch(0.1_0.01_40)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Book Your Experience</span>
            <div className="h-[1px] w-12 bg-gold/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Reservations
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Reserve your table or book a salon appointment — we'll have everything ready for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden h-64 mb-8 shadow-lg border border-gold/20">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80"
                alt="Dine X Divine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[oklch(0.08_0.01_40)]/50" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-xs font-medium text-gold/80 tracking-widest uppercase mb-1">Open Daily</p>
                <p className="text-xl font-bold" style={{ fontFamily: "Georgia, serif" }}>11 AM – 10:30 PM</p>
              </div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/40" />
            </div>

            <div className="space-y-4">
              {[
                { icon: Clock, title: "Hours", lines: ["Daily: 11:00 AM – 10:30 PM"] },
                { icon: Phone, title: "Phone", lines: ["+91 88772 22288"] },
                { icon: Mail, title: "Instagram", lines: ["@thedinexdivine"] },
              ].map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-4 p-4 bg-[oklch(0.14_0.012_40)] rounded-xl border border-white/8">
                  <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">{title}</p>
                    {lines.map(l => <p key={l} className="text-white/50 text-xs">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[oklch(0.14_0.012_40)] rounded-2xl p-8 border border-white/8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-14 h-14 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Georgia, serif" }}>
                  {bookingType === "dining" ? "Table Booked!" : "Appointment Confirmed!"}
                </h3>
                <p className="text-white/50 text-sm mb-6">
                  Thanks, {form.name}! We'll confirm via {form.phone}. See you on {form.date} at {form.time}.
                </p>
                <Button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", service: "", notes: "" }); }}
                  variant="outline"
                  className="rounded-full border-gold/40 text-gold hover:bg-gold/10 text-xs tracking-widest uppercase"
                >
                  Make Another Booking
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Booking type toggle */}
                <div className="flex gap-2 mb-6">
                  <button
                    type="button"
                    onClick={() => setBookingType("dining")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all ${
                      bookingType === "dining"
                        ? "bg-gold text-[oklch(0.1_0.01_40)]"
                        : "border border-white/15 text-white/50 hover:border-gold/40"
                    }`}
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    Dining
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType("salon")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all ${
                      bookingType === "salon"
                        ? "bg-gold text-[oklch(0.1_0.01_40)]"
                        : "border border-white/15 text-white/50 hover:border-gold/40"
                    }`}
                  >
                    <Scissors className="w-3.5 h-3.5" />
                    Salon
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-white/60 mb-1.5 block tracking-wider uppercase">Full Name *</label>
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold/50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-white/60 mb-1.5 block tracking-wider uppercase">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold/50"
                    />
                  </div>
                </div>

                {bookingType === "dining" ? (
                  <div>
                    <label className="text-xs font-medium text-white/60 mb-1.5 block tracking-wider uppercase flex items-center gap-1">
                      <Users className="w-3 h-3" /> Guests
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full h-9 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold/50"
                    >
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <option key={n} value={n} className="bg-[oklch(0.14_0.012_40)]">{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="text-xs font-medium text-white/60 mb-1.5 block tracking-wider uppercase">Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full h-9 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold/50"
                    >
                      <option value="" className="bg-[oklch(0.14_0.012_40)]">Select a service</option>
                      {salonServices.map((s) => (
                        <option key={s} value={s} className="bg-[oklch(0.14_0.012_40)]">{s}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="text-xs font-medium text-white/60 mb-1.5 block tracking-wider uppercase flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Date *
                  </label>
                  <Input
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white focus:border-gold/50"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-white/60 mb-1.5 block tracking-wider uppercase flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Time *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setForm({ ...form, time: slot })}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          form.time === slot
                            ? "bg-gold text-[oklch(0.1_0.01_40)] border-gold"
                            : "border-white/15 text-white/50 hover:border-gold/40 hover:text-white"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-white/60 mb-1.5 block tracking-wider uppercase">Special Requests</label>
                  <textarea
                    placeholder="Any special requests or notes..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={2}
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-gold/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-[oklch(0.1_0.01_40)] hover:bg-[oklch(0.65_0.13_75)] rounded-full h-11 text-xs font-bold tracking-widest uppercase border border-gold/50"
                >
                  {loading ? "Confirming..." : bookingType === "dining" ? "Confirm Table" : "Confirm Appointment"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


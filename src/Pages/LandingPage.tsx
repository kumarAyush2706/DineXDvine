import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import About from "../components/About";
import MenuSection from "../components/MenuSection";
import SalonSection from "../components/SaloonSection";
import Gallery from "../components/Gallary";
import EventsSection from "../components/EventSection";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import Reservations from "../components/Reservation";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0.01_40)]">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <SalonSection />
      <Gallery />
      <EventsSection />
      <Testimonials />
      <BlogSection />
      <Reservations />
      <Footer />
    </div>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = ["All", "Pizzas", "Pasta", "Biryani", "Chinese", "Shakes", "Beverages"];

const menuItems = [
  {
    id: 1,
    category: "Pizzas",
    name: "Margherita Classic",
    description: "San Marzano tomato sauce, fresh mozzarella, basil, and extra virgin olive oil",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    tag: "Best Seller",
  },
  {
    id: 2,
    category: "Pizzas",
    name: "BBQ Chicken Pizza",
    description: "Smoky BBQ sauce, grilled chicken, red onions, jalapeños, and cheddar",
    price: "₹379",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
    tag: "Chef's Pick",
  },
  {
    id: 3,
    category: "Pizzas",
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, olives, onions, and fresh herbs on tomato base",
    price: "₹329",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
  },
  {
    id: 4,
    category: "Pasta",
    name: "Penne Arrabbiata",
    description: "Spicy tomato sauce with garlic, red chilli flakes, and fresh parsley",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    tag: "Spicy",
  },
  {
    id: 5,
    category: "Pasta",
    name: "Creamy Alfredo",
    description: "Fettuccine in rich parmesan cream sauce with garlic and black pepper",
    price: "₹279",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80",
    tag: "Fan Favourite",
  },
  {
    id: 6,
    category: "Biryani",
    name: "Chicken Dum Biryani",
    description: "Slow-cooked basmati rice with tender chicken, saffron, and aromatic spices",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
    tag: "Must Try",
  },
  {
    id: 7,
    category: "Biryani",
    name: "Veg Biryani",
    description: "Fragrant basmati with seasonal vegetables, whole spices, and fried onions",
    price: "₹229",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
  },
  {
    id: 8,
    category: "Chinese",
    name: "Hakka Noodles",
    description: "Stir-fried noodles with vegetables, soy sauce, and sesame oil",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80",
  },
  {
    id: 9,
    category: "Chinese",
    name: "Chilli Paneer",
    description: "Crispy paneer tossed in spicy Indo-Chinese sauce with bell peppers",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
    tag: "Popular",
  },
  {
    id: 10,
    category: "Shakes",
    name: "Brownie Oreo Shake",
    description: "Rich chocolate brownie blended with Oreo cookies and creamy milk",
    price: "₹179",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
    tag: "Bestseller",
  },
  {
    id: 11,
    category: "Shakes",
    name: "Peanut Butter Kaju Shake",
    description: "Creamy peanut butter blended with cashews, milk, and a hint of honey",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80",
    tag: "Signature",
  },
  {
    id: 12,
    category: "Beverages",
    name: "Cold Coffee With Ice Cream",
    description: "Chilled espresso blended with milk, topped with a scoop of vanilla ice cream",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
    tag: "Bestseller",
  },
  {
    id: 13,
    category: "Beverages",
    name: "Mango Milkshake",
    description: "Fresh Alphonso mango blended with chilled milk and a touch of cardamom",
    price: "₹129",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80",
  },
  {
    id: 14,
    category: "Beverages",
    name: "Chocolate Milkshake",
    description: "Rich Belgian chocolate blended with cold milk and topped with whipped cream",
    price: "₹139",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[oklch(0.1_0.01_40)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">What We Serve</span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Our Menu
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Fresh ingredients, bold flavours, generous portions — the Dine X Divine promise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gold text-[oklch(0.1_0.01_40)] shadow-md"
                  : "bg-white/5 text-white/60 hover:text-white border border-white/10 hover:border-gold/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-[oklch(0.14_0.012_40)] rounded-2xl overflow-hidden border border-white/8 hover:border-gold/30 transition-all duration-300 group shadow-lg hover:shadow-gold/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-[oklch(0.08_0.01_40)]/20" />
                  {item.tag && (
                    <span className="absolute top-3 left-3 bg-gold text-[oklch(0.1_0.01_40)] text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold text-white" style={{ fontFamily: "Georgia, serif" }}>{item.name}</h3>
                    <span className="text-gold font-bold text-base shrink-0">{item.price}</span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
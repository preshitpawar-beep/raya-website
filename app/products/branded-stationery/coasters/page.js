"use client";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const coasters = [
  {
    name: "Cork Coaster",
    desc: "Natural cork coaster designed for everyday desk and table use. 🌿",
    sustainable: true,
  },
  {
    name: "Bamboo Coaster",
    desc: "Smooth bamboo coaster offering a refined and eco-conscious finish. 🌿",
    sustainable: true,
  },
  {
    name: "Leatherette Coaster",
    desc: "Premium leather-look coaster suitable for executive gifting.",
  },
  {
    name: "Wooden Coaster",
    desc: "Classic wooden coaster with a warm, natural appearance.",
  },
  {
    name: "Ceramic Coaster",
    desc: "Gloss-finish ceramic coaster ideal for detailed branding.",
  },

];

export default function CoastersPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-6 text-neutral-900"
          >
            Branded Coasters
          </motion.h1>

          <p className="max-w-2xl text-lg text-neutral-600">
            A selection of branded coasters designed to protect surfaces while
            subtly reinforcing your brand presence.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {coasters.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl border shadow-sm p-8"
          >
            <div className="h-36 bg-neutral-100 rounded-xl mb-6" />

            <h3 className="text-xl font-semibold mb-2 text-neutral-900">
              {item.name}
            </h3>

            <p className="text-sm text-neutral-600">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>
    </>
  );
}

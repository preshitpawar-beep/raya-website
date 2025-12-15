"use client";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const keyRings = [
  {
    name: "Metal Key Ring",
    desc: "Durable metal key ring designed for everyday professional use.",
  },
  {
    name: "Leather Key Ring",
    desc: "Premium leather-finish key ring suitable for executive gifting.",
  },
  {
    name: "Recycled Plastic Key Ring",
    desc: "Produced using recycled materials to support responsible sourcing. 🌿",
    sustainable: true,
  },
  {
    name: "Wooden Key Ring",
    desc: "Natural wooden key ring with a warm, minimal aesthetic. 🌿",
    sustainable: true,
  },
  {
    name: "Soft PVC Key Ring",
    desc: "Flexible PVC key ring ideal for vibrant branding applications.",
  },
  {
    name: "Bottle Opener Key Ring",
    desc: "Functional key ring combining convenience with brand visibility.",
  },
  {
    name: "Oval Metal Key Ring",
    desc: "Classic oval-shaped metal key ring with a polished finish.",
  },
  {
    name: "Rectangular Key Ring",
    desc: "Modern rectangular key ring suitable for clean logo placement.",
  },
];

export default function KeyRingsPage() {
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
            Branded Key Rings
          </motion.h1>

          <p className="max-w-2xl text-lg text-neutral-600">
            Practical branded key rings designed to keep your brand visible
            through everyday use.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {keyRings.map((item, index) => (
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


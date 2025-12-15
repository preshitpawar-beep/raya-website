"use client";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const notebooks = [
  {
    name: "Hardcover Notebook",
    desc: "A premium hardcover notebook ideal for professional use and gifting.",
  },
  {
    name: "Softcover Notepad",
    desc: "Lightweight and flexible notepad designed for everyday note-taking.",
  },
  {
    name: "Executive Notebook",
    desc: "Refined notebook with quality paper, suitable for leadership teams.",
  },
  {
    name: "Recycled Paper Notebook",
    desc: "Produced using recycled paper to support responsible sourcing. 🌿",
    sustainable: true,
  },
  {
    name: "Kraft Cover Notebook",
    desc: "Natural kraft cover notebook with an eco-conscious finish. 🌿",
    sustainable: true,
  },
  {
    name: "Spiral Bound Notebook",
    desc: "Practical spiral notebook designed for flexibility and ease of use.",
  },
  {
    name: "A5 Branded Notebook",
    desc: "Compact A5 notebook perfect for conferences and events.",
  },
  {
    name: "A4 Writing Pad",
    desc: "Professional A4 writing pad suitable for meetings and workshops.",
  },
  {
    name: "Pocket Notepad",
    desc: "Small, portable notepad designed for quick notes on the go.",
  },
  {
    name: "Premium Linen Notebook",
    desc: "Elegant linen-finish notebook for high-end brand presentation.",
  },
];

export default function NotebooksPage() {
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
            Branded Notebooks & Notepads
          </motion.h1>

          <p className="max-w-2xl text-lg text-neutral-600">
            A versatile range of branded notebooks and notepads designed for
            everyday use, events, and professional environments.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {notebooks.map((item, index) => (
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

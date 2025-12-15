"use client";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const pens = [
  "Metal Ballpoint Pen",
  "Soft Touch Pen",
  "Executive Roller Pen",
  "Eco Bamboo Pen",
  "Gel Ink Pen",
  "Twist Action Pen",
  "Stylus Pen",
  "Premium Gift Pen",
];

export default function PensPage() {
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
            Branded Pens
          </motion.h1>

          <p className="max-w-2xl text-lg text-neutral-600">
            Premium branded pens designed for everyday use, gifting, and
            professional brand representation.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pens.map((pen, i) => (
          <motion.div
            key={pen}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border shadow-sm p-8"
          >
            <div className="h-40 bg-neutral-100 rounded-xl mb-6" />
            <h3 className="text-xl font-semibold mb-2 text-neutral-900">
              {pen}
            </h3>
            <p className="text-sm text-neutral-600">
              Customisable with your logo and brand colours.
            </p>
          </motion.div>
        ))}
      </section>
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const pens = [
  {
    name: "Metal Ballpoint Pen",
    desc: "A sleek, durable metal pen designed for everyday professional use.",
  },
  {
    name: "Soft Touch Pen",
    desc: "Comfortable soft-touch finish with smooth ink flow for extended writing.",
  },
  {
    name: "Executive Roller Pen",
    desc: "A refined writing instrument ideal for gifting and executive settings.",
  },
  {
    name: "Eco Bamboo Pen",
    desc: "Crafted from natural bamboo with minimal environmental impact. 🌿",
    sustainable: true,
  },
  {
    name: "Recycled Plastic Pen",
    desc: "Made using recycled materials to support responsible sourcing. 🌿",
    sustainable: true,
  },
  {
    name: "Twist Action Pen",
    desc: "Classic twist mechanism with a timeless, professional aesthetic.",
  },
  {
    name: "Stylus Pen",
    desc: "Dual-function pen with stylus tip for modern hybrid work environments.",
  },
  {
    name: "Gel Ink Pen",
    desc: "Smooth gel ink pen delivering consistent and effortless writing.",
  },
  {
    name: "Premium Gift Pen",
    desc: "Elegant pen designed for premium gifting and brand presentation.",
  },
  {
    name: "Slim Profile Pen",
    desc: "Minimal, lightweight design ideal for conferences and events.",
  },
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
            A curated selection of branded pens designed to balance functionality,
            aesthetics, and brand visibility.
          </p>
        </div>
      </section>

      {/* PENS GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pens.map((pen, index) => (
          <motion.div
            key={pen.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl border shadow-sm p-8"
          >
            {/* Image placeholder */}
            <div className="h-36 bg-neutral-100 rounded-xl mb-6" />

            <h3 className="text-xl font-semibold mb-2 text-neutral-900">
              {pen.name}
            </h3>

            <p className="text-sm text-neutral-600">
              {pen.desc}
            </p>
          </motion.div>
        ))}
      </section>
    </>
  );
}

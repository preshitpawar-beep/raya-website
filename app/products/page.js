"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const products = [
  {
    title: "Branded Stationery",
    desc: "Thoughtfully designed stationery that reflects your brand identity.",
  },
  {
    title: "Welcome Kits",
    desc: "Curated onboarding kits for employees, partners, or clients.",
  },
  {
    title: "Corporate Gift Sets",
    desc: "Premium gifting solutions for events, milestones, and campaigns.",
  },
  {
    title: "Custom Packaging",
    desc: "Packaging designed to elevate the gifting experience.",
  },
];

export default function Products() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-8 py-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-6"
          >
            Our Solutions
          </motion.h1>
          <p className="max-w-xl text-lg opacity-80">
            A flexible range of corporate gifting and branding solutions designed
            to meet different business needs.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12">
        {products.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-10"
          >
            <div className="h-40 bg-neutral-100 rounded-xl mb-6" />
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="opacity-75">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold mb-6">
            Not Sure What Fits Your Needs?
          </h2>
          <p className="opacity-90 mb-10">
            Share your requirements and we’ll help you explore suitable options.
          </p>
          <a
            href="/quote"
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}

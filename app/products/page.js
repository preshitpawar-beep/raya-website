"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const products = [
  {
    title: "Branded Stationery",
    desc: "Thoughtfully designed stationery that reflects your brand identity.",
    href: "/products/branded-stationery",
    image: "/images/products/branded-stationery.png",
  },
  {
    title: "Welcome Kits",
    desc: "Curated onboarding kits for employees, partners, or clients.",
    href: "/products/welcome-kits",
    image: "/images/products/welcome-kits.png",
  },
  {
    title: "Corporate Gift Sets",
    desc: "Premium gifting solutions for events, milestones, and campaigns.",
    href: "/products/corporate-gifts",
    image: "/images/products/corporate-gifts.png",
  },
  {
    title: "Custom Packaging",
    desc: "Packaging designed to elevate the gifting experience.",
    href: "/products/custom-packaging",
    image: "/images/products/custom-packaging.png",
  },
];

export default function Products() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold mb-6 text-neutral-900"
            >
              Our Solutions
            </motion.h1>

            <p className="max-w-xl text-lg text-neutral-600">
              A flexible range of corporate gifting and branding solutions designed
              to meet different business needs.
            </p>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full"
          >
            <div className="w-full h-[380px] rounded-3xl bg-neutral-100 overflow-hidden">
              <img
                src="/images/products-hero.png"
                alt="Wide selection of branded corporate gifts"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12">
        {products.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="block bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition"
          >
            <div className="h-48 rounded-xl mb-6 overflow-hidden bg-neutral-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-neutral-900">
              {item.title}
            </h3>
            <p className="text-neutral-600">{item.desc}</p>
          </motion.a>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-white border-t py-24">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            Not Sure What Fits Your Needs?
          </h2>
          <p className="text-neutral-600 mb-10">
            Share your requirements and we’ll help you explore suitable options.
          </p>
          <a
            href="/quote"
            className="inline-block bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}

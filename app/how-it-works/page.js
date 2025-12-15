"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function HowItWorks() {
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
            How It Works
          </motion.h1>
          <p className="max-w-xl text-lg opacity-80">
            Our process is designed to make corporate gifting simple, flexible,
            and aligned with your brand goals.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="max-w-7xl mx-auto px-8 py-24 space-y-24">
        {[
          {
            title: "Discover & Select",
            desc:
              "Explore a curated range of corporate gifts and stationery designed for professional branding."
          },
          {
            title: "Customize Your Brand",
            desc:
              "Personalize products with your logo, colors, and messaging to reflect your brand identity."
          },
          {
            title: "Production & Quality Check",
            desc:
              "Each order is carefully produced with attention to detail and quality standards."
          },
          {
            title: "Packaging & Delivery",
            desc:
              "Products are prepared and delivered based on your timeline and requirements."
          }
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-sm uppercase tracking-wide text-indigo-600 font-semibold">
                Step {i + 1}
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                {step.title}
              </h2>
              <p className="text-lg opacity-80">{step.desc}</p>
            </div>
            <div className="bg-neutral-100 rounded-2xl h-64" />
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Gifting Journey
          </h2>
          <p className="opacity-90 mb-10">
            Share your requirements and we’ll guide you through the next steps.
          </p>
          <a
            href="/quote"
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </>
  );
}

"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
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
            About Raya
          </motion.h1>
          <p className="max-w-xl text-lg opacity-80">
            Raya was created with a simple goal — to help businesses express
            their brand through thoughtful corporate gifting and stationery.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
          <p className="opacity-80 mb-4">
            We believe corporate gifts should feel intentional, well-designed,
            and aligned with the brand they represent.
          </p>
          <p className="opacity-80">
            Every product and process is approached with care, flexibility,
            and attention to detail.
          </p>
        </motion.div>

        <div className="h-72 bg-neutral-100 rounded-2xl" />
      </section>

      {/* VALUES */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            What We Focus On
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Thoughtful Design",
                desc: "Design-led products that elevate everyday corporate interactions."
              },
              {
                title: "Brand Alignment",
                desc: "Every detail reflects your brand’s tone, style, and intent."
              },
              {
                title: "Flexible Execution",
                desc: "Adaptable solutions that scale with your business needs."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="opacity-70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Meaningful
          </h2>
          <p className="opacity-90 mb-10">
            We’re excited to collaborate and bring your gifting ideas to life.
          </p>
          <a
            href="/quote"
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

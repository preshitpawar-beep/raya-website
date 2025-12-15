"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Sustainability() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-6 text-neutral-900"
          >
            Sustainability
          </motion.h1>
          <p className="max-w-xl text-lg opacity-80">
            We are committed to making thoughtful choices that reduce impact
            while delivering quality corporate gifting solutions.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <p className="opacity-80 mb-4">
            Sustainability is an ongoing process. We aim to work with materials,
            partners, and processes that are mindful of environmental impact.
          </p>
          <p className="opacity-80">
            As we grow, we continue exploring better sourcing, packaging, and
            production practices.
          </p>
        </motion.div>

        <div className="h-72 bg-neutral-100 rounded-2xl" />
      </section>

      {/* PRINCIPLES */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            What We Focus On
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Responsible Materials",
                desc: "Preference for materials that are durable, reusable, or recyclable where possible."
              },
              {
                title: "Thoughtful Packaging",
                desc: "Packaging choices that balance presentation with reduced waste."
              },
              {
                title: "Continuous Improvement",
                desc: "Actively learning and improving sustainability practices as we scale."
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
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
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
            Let’s Create Thoughtful Gifts
          </h2>
          <p className="opacity-90 mb-10">
            Explore gifting solutions designed with care for both brand and impact.
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

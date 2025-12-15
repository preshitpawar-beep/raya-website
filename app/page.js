"use client";

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold leading-tight mb-6"
          >
            Corporate Gifting <br /> Made Simple & Memorable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-lg opacity-90 mb-10"
          >
            We help businesses create meaningful brand moments through thoughtfully
            designed stationery and custom corporate gifts.
          </motion.p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/quote"
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            Get Started
          </motion.a>
        </div>
      </section>

      {/* HOW IT WORKS PREVIEW */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-center">
          {[
            { title: "Choose Products", desc: "Select from a curated range of premium corporate gifts and stationery." },
            { title: "Customize Branding", desc: "Add your logo, colors, and messaging with precision." },
            { title: "Production", desc: "We manage production with attention to quality and detail." },
            { title: "Delivery", desc: "Your gifts are prepared and delivered as per your requirements." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8"
            >
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm opacity-70">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
     {/* CTA */}
<section className="bg-white py-24 border-t border-neutral-200">
  <div className="max-w-4xl mx-auto text-center px-8">
    <h2 className="text-4xl font-bold mb-6 text-neutral-900">
      Ready to Create Meaningful Corporate Gifts?
    </h2>

    <p className="text-neutral-600 mb-10">
      Tell us about your requirements and we’ll guide you through the process
      with thoughtful, well-crafted gifting solutions.
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

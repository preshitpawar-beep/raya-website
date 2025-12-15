
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-8 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold leading-tight mb-6"
        >
          Premium Corporate Gifting <br /> Built for Modern Brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-lg opacity-90 mb-10"
        >
          We help businesses create memorable brand experiences through high-quality stationery and custom gifts.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/quote"
          className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold shadow-lg"
        >
          Request a Quote
        </motion.a>
      </div>
    </section>
  );
}

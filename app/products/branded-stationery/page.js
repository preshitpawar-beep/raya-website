"use client";
import { motion } from "framer-motion";

export default function BrandedStationeryPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Branded Stationery
          </motion.h1>

          <p className="max-w-2xl text-lg text-slate-600">
            Premium everyday stationery designed to carry your brand with
            elegance, consistency, and purpose.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Pens",
              "Notebooks & Notepads",
              "Coasters",
              "Key Rings",
              "Bags",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border"
              >
                <h3 className="text-xl font-semibold mb-3">{item}</h3>
                <p className="text-slate-600 mb-6">
                  Thoughtfully designed {item.toLowerCase()} that can be branded
                  to reflect your identity.
                </p>

                <a
                  href="#"
                  className="inline-block text-sm font-medium underline underline-offset-4"
                >
                  View products
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const categories = [
  {
    title: "Pens",
    href: "/products/branded-stationery/pens",
  },
  {
    title: "Notebooks & Notepads",
    href: "/products/branded-stationery/notebooks",
  },
  {
    title: "Coasters",
    href: "/products/branded-stationery/coasters",
  },
  {
    title: "Key Rings",
    href: "/products/branded-stationery/key-rings",
  },
  {
    title: "Bags",
    href: "/products/branded-stationery/bags",
  },
];

export default function BrandedStationeryPage() {
  return (
    <>
      {/* HEADER */}
      <Navbar />

      {/* HERO */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 text-neutral-900"
          >
            Branded Stationery
          </motion.h1>

          <p className="max-w-2xl text-lg text-neutral-600">
            Premium everyday stationery designed to carry your brand with
            elegance, consistency, and purpose.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="block bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  Explore our range of{" "}
                  {item.title.toLowerCase()} designed for professional branding
                  and everyday use.
                </p>

                <span className="inline-block text-sm font-medium underline underline-offset-4">
                  View products
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

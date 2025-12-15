"use client";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";

const bags = [
  {
    name: "Recycled Cotton Tote Bag",
    desc: "Durable tote bag made using recycled cotton for everyday brand visibility. 🌿",
  },
  {
    name: "Organic Canvas Bag",
    desc: "Strong canvas bag produced from responsibly sourced materials. 🌿",
  },
  {
    name: "Recycled PET Drawstring Bag",
    desc: "Lightweight drawstring bag made from recycled plastic bottles. 🌿",
  },
  {
    name: "Jute Shopper Bag",
    desc: "Natural jute bag offering a rustic look with a reduced environmental impact. 🌿",
  },
];

export default function BagsPage() {
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
            Sustainable Branded Bags
          </motion.h1>

          <p className="max-w-2xl text-lg text-neutral-600">
            A considered selection of branded bags designed with sustainability
            and practical everyday use in mind.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {bags.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl border shadow-sm p-8"
          >
            <div className="h-36 bg-neutral-100 rounded-xl mb-6" />

            <h3 className="text-xl font-semibold mb-2 text-neutral-900">
              {item.name}
            </h3>

            <p className="text-sm text-neutral-600">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>
    </>
  );
}

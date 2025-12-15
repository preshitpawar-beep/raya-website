
"use client";
import { motion } from "framer-motion";

export default function ProductCard({ title, image }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden"
    >
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-70 mt-2">
          Custom branding available. Pricing on request.
        </p>
      </div>
    </motion.div>
  );
}

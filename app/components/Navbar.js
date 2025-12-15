
"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <img
          src="https://giftify-pro.preview.emergentagent.com/logo.svg"
          alt="Raya"
          className="h-8"
        />
        <nav className="space-x-8 text-sm font-medium">
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/quote">Get Quote</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}

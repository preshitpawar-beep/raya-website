"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Quote() {
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
            Request a Quote
          </motion.h1>
          <p className="max-w-xl text-lg opacity-80">
            Share a few details about your requirements and we’ll get back to you
            with the next steps.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-8 py-24">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl p-10 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Company (optional)
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Tell us about your requirement
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Type of products, quantity, timeline, etc."
            />
          </div>

          <button
            type="button"
            className="w-full bg-indigo-700 text-white py-4 rounded-full font-semibold"
          >
            Submit Request
          </button>
        </motion.form>
      </section>
    </>
  );
}


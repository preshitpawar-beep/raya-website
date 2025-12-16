"use client";

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center">
    
    {/* TEXT */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold leading-tight mb-6 text-neutral-900"
      >
        Corporate Gifting <br /> Made Simple & Memorable
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl text-lg text-neutral-600 mb-10"
      >
        We help businesses create meaningful brand moments through thoughtfully
        designed stationery and custom corporate gifts.
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        href="/quote"
        className="inline-block bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold shadow-md"
      >
        Get Started
      </motion.a>
    </div>

    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full"
    >
      <div className="w-full h-[380px] rounded-3xl bg-neutral-100 overflow-hidden">
        {/* Image will go here */}
        <img
          src="/images/home-hero.png"
          alt="Premium corporate gifting arrangement"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

  </div>
</section>

<section className="max-w-7xl mx-auto px-8 py-24">
  <h2 className="text-4xl font-bold text-center mb-16 text-neutral-900">
    How It Works
  </h2>

  <div className="grid md:grid-cols-4 gap-12 text-center">
    {[
      {
        title: "Choose Products",
        desc: "Select from a curated range of premium corporate gifts and stationery.",
        icon: "/images/how-it-works/choose.png",
      },
      {
        title: "Customize Branding",
        desc: "Add your logo, colors, and messaging with precision.",
        icon: "/images/how-it-works/customize.png",
      },
      {
        title: "Production",
        desc: "We manage production with attention to quality and detail.",
        icon: "/images/how-it-works/production.png",
      },
      {
        title: "Delivery",
        desc: "Your gifts are prepared and delivered as per your requirements.",
        icon: "/images/how-it-works/delivery.png",
      },
    ].map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="bg-white rounded-2xl shadow-md p-8"
      >
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden">
            <img
              src={step.icon}
              alt={step.title}
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-neutral-900">
          {step.title}
        </h3>
        <p className="text-sm text-neutral-600">
          {step.desc}
        </p>
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

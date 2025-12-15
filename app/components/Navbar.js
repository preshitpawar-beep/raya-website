"use client"; 
import { motion } from "framer-motion"; 
export default function Navbar() { 
  return ( 
    <motion.header
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="sticky top-0 z-50 backdrop-blur bg-slate-900/95 border-b border-slate-800"
      > 
    <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center"> 
    {/* LOGO (clickable → home) */} 
      <a href="/" className="flex items-center"> 
      <img 
      src="/logo.png" 
      alt="Raya Gifts & Stationery" 
      className="h-12 md:h-14 w-auto object-contain"
    /> 
    </a> 
    {/* NAV LINKS */}
    <nav className="space-x-8 text-sm font-medium">
      <a href="/products" className="hover:text-indigo-700 transition"> 
      Products 
      </a>
      <a href="/about" className="hover:text-indigo-700 transition"> 
      About 
      </a>
      <a href="/quote" className="hover:text-indigo-700 transition"> 
      Get Quote
      </a>
      <a href="/contact" className="hover:text-indigo-700 transition">
      Sustainability 
      </a> 
    </nav> 
  </div> 
</motion.header> 
); 
}

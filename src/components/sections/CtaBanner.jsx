// src/components/sections/CtaBanner.jsx
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="py-28 px-6 bg-cream-200">
      <div className="max-w-4xl mx-auto text-center space-y-8 reveal">
        <p className="font-mono text-[10px] tracking-widest-3 uppercase text-gold">
          Ready?
        </p>
        <h2 className="font-display font-light text-ink leading-tight"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          Brand your products today.
        </h2>
        <p className="text-ink-500 font-light text-lg max-w-lg mx-auto leading-relaxed">
          Get a personalised quote for your business. No obligation, no hidden
          costs — just clear pricing and honest guidance.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/quote"
            className="px-12 py-5 bg-ink text-cream-100 text-xs tracking-widest uppercase font-light hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Get a Quote
          </Link>
          <Link
            href="/products"
            className="px-12 py-5 border border-ink text-ink text-xs tracking-widest uppercase font-light hover:bg-ink hover:text-cream-100 transition-all duration-300"
          >
            Browse Products
          </Link>
        </div>
        <p className="text-xs text-ink-400 font-light pt-2">
          Response within 1 working day · Free visual proof on every order
        </p>
      </div>
    </section>
  );
}

// src/components/sections/Hero.jsx
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background — placeholder gradient that AI image will replace */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-700">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Geometric accent lines */}
        <div className="absolute top-1/4 right-0 w-px h-64 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-1/3 left-24 w-px h-40 bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />
        {/* Large decorative letter */}
        <div className="absolute bottom-0 right-0 font-display text-[30vw] font-light text-cream-100/[0.02] leading-none select-none pointer-events-none">
          L
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="font-mono text-[10px] tracking-widest-3 uppercase text-gold mb-8 opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.2s forwards' }}
          >
            Branded Promotional Products · UK
          </p>

          {/* Headline */}
          <h1
            className="font-display font-light text-cream-100 leading-[1.05] opacity-0"
            style={{
              fontSize: 'clamp(3.2rem, 7vw, 7rem)',
              animation: 'fadeUp 0.8s ease 0.35s forwards',
            }}
          >
            Leave a mark
            <br />
            <em className="italic text-gold not-italic">that lasts.</em>
          </h1>

          {/* Sub */}
          <p
            className="mt-8 text-ink-300 font-light text-lg leading-relaxed max-w-xl opacity-0"
            style={{ animation: 'fadeUp 0.8s ease 0.55s forwards' }}
          >
            Premium pens, notebooks, bags and corporate giveaways — crafted for UK
            businesses that care how they show up.
          </p>

          {/* CTAs */}
          <div
            className="mt-12 flex flex-wrap gap-4 opacity-0"
            style={{ animation: 'fadeUp 0.8s ease 0.7s forwards' }}
          >
            <Link
              href="/products"
              className="px-10 py-4 bg-cream-100 text-ink text-xs tracking-widest uppercase font-light hover:bg-gold transition-all duration-300"
            >
              View Products
            </Link>
            <Link
              href="/quote"
              className="px-10 py-4 border border-cream-100/40 text-cream-100 text-xs tracking-widest uppercase font-light hover:border-gold hover:text-gold transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Trust bar */}
          <div
            className="mt-16 flex flex-wrap gap-6 opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.9s forwards' }}
          >
            {[
              'Free visual proof',
              'Response within 1 working day',
              'Clear pricing, no hidden costs',
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs text-ink-400 font-light"
              >
                <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#featured"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-400 hover:text-gold transition-colors duration-200 group"
        aria-label="Scroll to featured products"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase opacity-60">
          Scroll
        </span>
        <ArrowDown
          size={14}
          className="animate-bounce group-hover:text-gold"
          strokeWidth={1.5}
        />
      </a>
    </section>
  );
}

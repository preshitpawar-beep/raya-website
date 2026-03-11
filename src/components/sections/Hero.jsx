'use client';
// src/components/sections/Hero.jsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const SLIDES = [
  {
    src: '/images/hero/slide1.png',
    alt: 'Premium leather branded notebook with gold Legacy Imprint badge',
    overlay: 'bg-ink-900/55',
  },
  {
    src: '/images/hero/slide2.png',
    alt: 'Sustainable wooden notebook and bamboo pen flat lay',
    overlay: 'bg-ink-900/40',
  },
  {
    src: '/images/hero/slide3.png',
    alt: 'Premium Legacy Imprint branded metal pen',
    overlay: 'bg-ink-900/50',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent((c) => (c + 1) % SLIDES.length);
      setTimeout(() => {
        setPrev(null);
        setFading(false);
      }, 1200);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const goTo = (i) => {
    if (i === current) return;
    setPrev(current);
    setFading(true);
    setCurrent(i);
    setTimeout(() => {
      setPrev(null);
      setFading(false);
    }, 1200);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : i === prev && fading ? 0 : 0,
            zIndex: i === current ? 2 : i === prev ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${slide.overlay}`} />
        </div>
      ))}

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
        }}
      />

      {/* Accent lines */}
      <div className="absolute top-1/4 right-0 w-px h-64 bg-gradient-to-b from-transparent via-gold/30 to-transparent pointer-events-none" style={{ zIndex: 4 }} />
      <div className="absolute bottom-1/3 left-24 w-px h-40 bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block pointer-events-none" style={{ zIndex: 4 }} />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full" style={{ zIndex: 5 }}>
        <div className="max-w-3xl">
          <p
            className="font-mono text-[10px] tracking-widest-3 uppercase text-gold mb-8 opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.2s forwards' }}
          >
            Branded Promotional Products · UK
          </p>

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

          <p
            className="mt-8 text-ink-300 font-light text-lg leading-relaxed max-w-xl opacity-0"
            style={{ animation: 'fadeUp 0.8s ease 0.55s forwards' }}
          >
            Premium pens, notebooks, bags and corporate giveaways — crafted for UK
            businesses that care how they show up.
          </p>

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

          <div
            className="mt-16 flex flex-wrap gap-6 opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.9s forwards' }}
          >
            {[
              'Free visual proof',
              'Response within 1 working day',
              'Clear pricing, no hidden costs',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-xs text-ink-400 font-light">
                <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3"
        style={{ zIndex: 5 }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-8 h-1.5 bg-gold'
                : 'w-1.5 h-1.5 bg-cream-100/30 hover:bg-cream-100/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      
        href="#featured"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-400 hover:text-gold transition-colors duration-200 group"
        style={{ zIndex: 5 }}
        aria-label="Scroll to featured products"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase opacity-60">Scroll</span>
        <ArrowDown size={14} className="animate-bounce group-hover:text-gold" strokeWidth={1.5} />
      </a>
    </section>
  );
}

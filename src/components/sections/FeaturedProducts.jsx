// src/components/sections/FeaturedProducts.jsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section id="featured" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 reveal">
            <p className="font-mono text-[10px] tracking-widest-2 uppercase text-gold">
              Featured
            </p>
            <h2 className="font-display font-light text-5xl md:text-6xl text-ink leading-tight">
              Popular products
            </h2>
            <p className="text-ink-500 font-light max-w-md leading-relaxed">
              A curated selection of practical, well-finished branded merchandise
              favoured by UK businesses.
            </p>
          </div>

          <Link
            href="/products"
            className="reveal flex items-center gap-2 text-sm tracking-widest uppercase font-light text-ink-500 hover:text-gold transition-colors duration-200 whitespace-nowrap group"
          >
            All products
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <ProductCard product={product} priority={i < 2} />
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center reveal">
          <Link
            href="/products"
            className="inline-block px-12 py-4 border border-ink text-ink text-xs tracking-widest uppercase font-light hover:bg-ink hover:text-cream-100 transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

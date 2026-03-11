'use client';
// src/app/products/ProductsClient.jsx
import { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/lib/products';

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        {CATEGORIES.map(({ slug, label }) => (
          <button
            key={slug}
            onClick={() => setActiveCategory(slug)}
            className={`px-5 py-2 text-xs tracking-widest uppercase font-light border transition-all duration-200 ${
              activeCategory === slug
                ? 'bg-ink text-cream-100 border-ink'
                : 'bg-transparent text-ink-500 border-ink-300 hover:border-ink hover:text-ink'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-xs font-mono text-ink-400 mb-8 uppercase tracking-wider">
        {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        {activeCategory !== 'all' ? ` in ${CATEGORIES.find((c) => c.slug === activeCategory)?.label}` : ''}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((product, i) => (
          <div key={product.id}>
            <ProductCard product={product} priority={i < 4} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center text-ink-400 font-light">
          No products in this category yet.
        </div>
      )}
    </>
  );
}

// src/components/ui/ProductCard.jsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product, priority = false }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-cream-50 border border-cream-300 hover:border-gold transition-all duration-400 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-cream-200">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.code} branded promotional product`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={priority}
        />
        {/* Overlay badge */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[9px] tracking-widest uppercase bg-ink text-cream-100 px-2 py-1">
            {product.code}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <p className="text-xs tracking-widest uppercase font-light text-ink-400">
          {product.category.replace('-', ' ')}
        </p>
        <h3 className="font-display text-xl font-light text-ink leading-tight">
          {product.name}
        </h3>
        <p className="text-sm font-light text-ink-500 leading-relaxed line-clamp-2">
          {product.shortDesc}
        </p>
        <div className="pt-3 flex items-end justify-between">
          <div>
            <p className="text-xs text-ink-400 font-light">From</p>
            <p className="font-display text-2xl font-light text-ink">
              £{product.price.toFixed(2)}
            </p>
            <p className="text-[10px] text-ink-400 font-light">excl. VAT · print included</p>
          </div>
          <span className="flex items-center gap-1 text-xs tracking-wider uppercase text-gold group-hover:gap-2 transition-all duration-200">
            Quote <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

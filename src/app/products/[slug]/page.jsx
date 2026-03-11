// src/app/products/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { PRODUCTS, getProductBySlug } from '@/lib/products';
import { buildMetadata, productStructuredData } from '@/lib/seo';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} (${product.code})`,
    description: product.description,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const structuredData = productStructuredData(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-light text-ink-400 hover:text-gold transition-colors duration-200 mb-12 group"
          >
            <ArrowLeft
              size={12}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            All Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Image */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-cream-200 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.code}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {/* Code badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[9px] tracking-widest uppercase bg-ink text-cream-100 px-3 py-1.5">
                    {product.code}
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              {/* Category */}
              <p className="font-mono text-[10px] tracking-widest-2 uppercase text-gold">
                {product.category.replace('-', ' ')}
              </p>

              {/* Name */}
              <h1 className="font-display font-light leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
              >
                {product.name}
              </h1>

              {/* Price */}
              <div className="space-y-1 pb-6 border-b border-ink-200">
                <p className="text-xs text-ink-400 font-mono uppercase tracking-wider">
                  From
                </p>
                <p className="font-display text-5xl font-light text-ink">
                  £{product.price.toFixed(2)}
                </p>
                <p className="text-xs text-ink-400 font-light">
                  excl. VAT · price includes one standard branding method
                </p>
              </div>

              {/* Description */}
              <p className="text-ink-600 font-light leading-relaxed">{product.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-ink-200">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-1">
                    Material
                  </p>
                  <p className="text-sm font-light capitalize">{product.material}</p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-1">
                    Available Colours
                  </p>
                  <p className="text-sm font-light capitalize">{product.colours.join(', ')}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-2">
                    Branding Methods
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.brandingMethods.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-3 py-1 border border-ink-300 font-light text-ink-600"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Included */}
              <div className="space-y-2">
                {[
                  'Free visual proof before production',
                  'Design & colour guidance included',
                  'Response within 1 working day',
                  'No obligation quote',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                    <span className="text-sm font-light text-ink-600">{item}</span>
                  </div>
                ))}
              </div>

              {/* Quote CTA */}
              <Link
                href={`/quote?product=${product.code}&name=${encodeURIComponent(product.name)}`}
                className="block w-full py-5 bg-ink text-cream-100 text-xs tracking-widest uppercase font-light text-center hover:bg-gold hover:text-ink transition-all duration-300"
              >
                Get a Quote for This Product
              </Link>

              <p className="text-xs text-center text-ink-400 font-light">
                Pricing varies by quantity — we'll send exact figures within 1 working day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

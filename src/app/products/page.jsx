// src/app/products/page.jsx
import { buildMetadata } from '@/lib/seo';
import ProductsClient from './ProductsClient';

export const metadata = buildMetadata({
  title: 'Branded Promotional Products',
  description:
    'Browse our full range of branded promotional products — pens, notebooks, bags, keyrings and gift sets for UK businesses. All prices include one standard branding method.',
  path: '/products',
});

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="mb-16 space-y-3">
          <p className="font-mono text-[10px] tracking-widest-2 uppercase text-gold">
            Catalogue
          </p>
          <h1 className="font-display font-light text-6xl md:text-7xl text-ink leading-none">
            Products
          </h1>
          <p className="text-ink-500 font-light max-w-md leading-relaxed">
            All prices include one standard branding method. Request a quote for
            exact pricing by quantity.
          </p>
        </div>

        <ProductsClient />
      </div>
    </div>
  );
}

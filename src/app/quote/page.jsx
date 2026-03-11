// src/app/quote/page.jsx
import { buildMetadata } from '@/lib/seo';
import QuoteForm from './QuoteForm';

export const metadata = buildMetadata({
  title: 'Get a Quote',
  description:
    "Request a personalised branded merchandise quote for your UK business. Tell us what you need and we'll respond with clear pricing within one working day.",
  path: '/quote',
});

export default function QuotePage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <p className="font-mono text-[10px] tracking-widest-2 uppercase text-gold">
            No Obligation
          </p>
          <h1 className="font-display font-light text-6xl md:text-7xl text-ink leading-none">
            Get a Quote
          </h1>
          <p className="text-ink-500 font-light leading-relaxed max-w-md">
            Tell us what you're looking for and we'll come back with clear pricing
            within one working day. No hidden costs, no pressure.
          </p>
        </div>

        {/* Trust line */}
        <div className="flex flex-wrap gap-6 mb-12 pb-12 border-b border-ink-200">
          {[
            'Response in 1 working day',
            'Free visual proof',
            'No obligation',
          ].map((item) => (
            <span key={item} className="flex items-center gap-2 text-xs text-ink-500 font-light">
              <span className="w-1 h-1 bg-gold rounded-full" />
              {item}
            </span>
          ))}
        </div>

        <QuoteForm />
      </div>
    </div>
  );
}

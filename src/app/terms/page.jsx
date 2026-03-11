// src/app/terms/page.jsx
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Legacy Imprint SW.',
  path: '/terms',
});

export default function Terms() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-light text-6xl text-ink mb-12">
          Terms & Conditions
        </h1>
        <div className="space-y-8 font-light text-ink-600 leading-relaxed">
          <p className="text-xs font-mono uppercase tracking-wider text-gold">
            Last updated: January 2026
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">1. Quotes</h2>
            <p>All quotes provided by Legacy Imprint SW are estimates based on the information supplied and are valid for 30 days from issue unless otherwise stated. Final pricing is confirmed upon order placement.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">2. Orders & Artwork</h2>
            <p>Orders are confirmed once artwork and payment terms are agreed in writing. We will provide a visual proof for approval before production commences. Production will not begin without written approval of the proof.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">3. Delivery</h2>
            <p>Delivery timescales are estimated and depend on product availability and production schedules. We will communicate timelines clearly at the time of order and notify you of any changes.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">4. Returns & Disputes</h2>
            <p>If products are supplied incorrectly or are defective, please contact us within 7 days of receipt. We will work with you to resolve any issues fairly. Bespoke branded products cannot be returned unless they are faulty or differ from the approved proof.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">5. Intellectual Property</h2>
            <p>You warrant that you have the right to use any logos or artwork supplied for branding. Legacy Imprint SW accepts no liability for intellectual property infringement relating to artwork supplied by the client.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">6. Contact</h2>
            <p>For any queries, contact us at <a href="mailto:info@legacyimprint.co.uk" className="text-gold hover:underline">info@legacyimprint.co.uk</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}

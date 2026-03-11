// src/app/privacy-policy/page.jsx
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Legacy Imprint SW.',
  path: '/privacy-policy',
});

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-light text-6xl text-ink mb-12">Privacy Policy</h1>
        <div className="prose prose-sm prose-ink max-w-none space-y-8 font-light text-ink-600 leading-relaxed">
          <p className="text-xs font-mono uppercase tracking-wider text-gold">Last updated: January 2026</p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">1. Who we are</h2>
            <p>Legacy Imprint SW is a UK-based branded promotional products business. Our contact email is info@legacyimprint.co.uk and we are based in Tiverton, Devon.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">2. What data we collect</h2>
            <p>When you submit a quote request, we collect your name, email address, phone number (if provided), company name (if provided), and the details of your enquiry. We use this information solely to respond to your request.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">3. How we use your data</h2>
            <p>Your data is used only to process your quote request and respond to your enquiry. We do not sell, share, or rent your personal data to third parties. We do not use it for marketing without your explicit consent.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">4. Data retention</h2>
            <p>We retain enquiry data for a maximum of 24 months, after which it is securely deleted.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">5. Your rights</h2>
            <p>Under UK GDPR, you have the right to access, correct, or request deletion of your personal data. Contact us at info@legacyimprint.co.uk to exercise these rights.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">6. Cookies</h2>
            <p>This website uses minimal, essential cookies for functionality only. We do not use tracking or advertising cookies.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-light text-ink">7. Contact</h2>
            <p>For any privacy-related queries, contact us at <a href="mailto:info@legacyimprint.co.uk" className="text-gold hover:underline">info@legacyimprint.co.uk</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}

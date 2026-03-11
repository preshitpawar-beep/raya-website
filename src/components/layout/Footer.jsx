// src/components/layout/Footer.jsx
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { SITE } from '@/lib/seo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-cream-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-ink-700">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <p className="font-display font-light tracking-widest text-2xl text-cream-100">
                LEGACY
              </p>
              <p className="font-mono text-[10px] tracking-widest-2 uppercase text-gold">
                Imprint SW
              </p>
            </div>
            <p className="text-sm font-light leading-relaxed text-ink-300 max-w-xs">
              Branded promotional products for UK businesses that care how they show up.
            </p>
            <div className="flex flex-col gap-3 text-sm text-ink-400">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-gold transition-colors duration-200"
              >
                <Mail size={14} />
                {SITE.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                {SITE.location}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-5">
            <h3 className="text-xs tracking-widest uppercase font-light text-ink-400">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/products', label: 'Products' },
                { href: '/quote', label: 'Get a Quote' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-ink-300 hover:text-gold transition-colors duration-200 w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className="space-y-5">
            <h3 className="text-xs tracking-widest uppercase font-light text-ink-400">
              Ready to brand?
            </h3>
            <p className="text-sm font-light leading-relaxed text-ink-300">
              Tell us what you need. We'll come back with a clear quote within one working day.
            </p>
            <Link
              href="/quote"
              className="inline-block px-8 py-3 border border-gold text-gold text-xs tracking-widest uppercase font-light hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-500">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

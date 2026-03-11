// src/components/sections/HowItWorks.jsx
import Link from 'next/link';

const STEPS = [
  {
    num: '01',
    title: 'Browse or skip to quote',
    body: 'Explore our catalogue and pick products, or head straight to the quote form if you already know what you need.',
  },
  {
    num: '02',
    title: 'Tell us product & quantity',
    body: 'Share the product code, your desired quantity, and any branding details. We handle the rest.',
  },
  {
    num: '03',
    title: 'We review & respond',
    body: 'We check availability, pricing, and branding options — then respond with a clear, no-obligation quote within one working day.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div className="space-y-6 reveal-left">
            <p className="font-mono text-[10px] tracking-widest-2 uppercase text-gold">
              The Process
            </p>
            <h2 className="font-display font-light text-5xl md:text-6xl text-ink leading-tight">
              Simple. No
              <br />
              <em className="italic text-gold">pressure.</em>
            </h2>
            <p className="text-ink-500 font-light leading-relaxed max-w-sm">
              A straightforward, no-pressure process designed to save you time and
              avoid unnecessary back and forth.
            </p>
            <div className="pt-4 space-y-1">
              <p className="text-xs text-ink-400 font-light font-mono uppercase tracking-wider">
                Typical response time
              </p>
              <p className="font-display text-3xl font-light text-ink">
                Within 1 working day
              </p>
            </div>
            <Link
              href="/quote"
              className="inline-block mt-4 px-10 py-4 bg-ink text-cream-100 text-xs tracking-widest uppercase font-light hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Right — steps */}
          <div className="space-y-0 reveal-right">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="flex gap-8 py-8 border-b border-ink-200 last:border-0 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex-shrink-0 pt-1">
                  <span className="font-mono text-xs tracking-widest text-ink-300 group-hover:text-gold transition-colors duration-200">
                    {step.num}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-light text-ink group-hover:text-gold transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm font-light text-ink-500 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

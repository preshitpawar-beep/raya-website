// src/components/sections/WhyUs.jsx
import { Eye, Palette, Users, PoundSterling } from 'lucide-react';

const PILLARS = [
  {
    icon: Eye,
    title: 'Free Visual Proof',
    body: 'See exactly how your logo will look on the product before a single unit is made. No guesswork, no surprises.',
  },
  {
    icon: Palette,
    title: 'Design & Colour Guidance',
    body: 'We help you choose colours and finishes that complement your brand identity and look right on the product.',
  },
  {
    icon: Users,
    title: 'Real People, Real Support',
    body: 'Speak directly with someone who understands your brief. No automated responses, no unnecessary layers.',
  },
  {
    icon: PoundSterling,
    title: 'Clear, Honest Pricing',
    body: 'Transparent pricing with branding included where possible. What you see is what you pay.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-28 px-6 bg-ink-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-20 reveal">
          <p className="font-mono text-[10px] tracking-widest-2 uppercase text-gold mb-4">
            Why Legacy Imprint
          </p>
          <h2 className="font-display font-light text-5xl md:text-6xl text-cream-100 leading-tight">
            A calmer, more{' '}
            <em className="italic text-gold">considered</em> process.
          </h2>
          <p className="mt-6 text-ink-400 font-light leading-relaxed">
            We believe branded merchandise should feel purposeful — not rushed,
            overcomplicated, or disposable.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="reveal bg-ink-900 p-10 space-y-4 hover:bg-ink-800 transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-ink-700">
                <Icon size={18} strokeWidth={1} className="text-gold" />
              </div>
              <h3 className="font-display text-xl font-light text-cream-100">{title}</h3>
              <p className="text-sm font-light text-ink-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

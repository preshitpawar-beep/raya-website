// src/components/sections/Marquee.jsx

const ITEMS = [
  'Free Visual Proof',
  'Response in 1 Working Day',
  'Clear Pricing',
  'UK Based',
  'Personal Service',
  'Pens & Notebooks',
  'Bags & Keyrings',
  'Gift Sets',
  'Corporate Giveaways',
  'Eco-Friendly Options',
];

export default function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-gold py-3 overflow-hidden relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gold to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gold to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 mx-6 font-mono text-[10px] uppercase tracking-widest text-ink font-light"
          >
            {item}
            <span className="text-ink/30">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}

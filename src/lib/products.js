// src/lib/products.js
// ─────────────────────────────────────────────────────────────────────────────
// Central product catalogue for Legacy Imprint SW.
// Add, edit or remove products here — the site regenerates automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const CATEGORIES = [
  { slug: 'all',        label: 'All Products' },
  { slug: 'pens',       label: 'Pens' },
  { slug: 'notebooks',  label: 'Notebooks' },
  { slug: 'keyrings',   label: 'Key Rings' },
  { slug: 'combo-sets', label: 'Combo Sets' },
  { slug: 'bags',       label: 'Bags' },
];

export const PRODUCTS = [
  // ── PENS ──────────────────────────────────────────────────────────────────
  {
    id: 'MP09',
    slug: 'mp09-roseberry',
    name: 'Roseberry',
    code: 'MP09',
    category: 'pens',
    price: 4.73,
    image: '/images/products/MP09.jpg',
    shortDesc: 'A premium metal pen with a soft-touch barrel and a twist mechanism.',
    description:
      'The Roseberry is a premium metal ballpoint pen featuring a soft-touch lacquered barrel and twist mechanism. Its substantial weight and balanced feel communicate quality with every use — ideal for senior giveaways, client gifts, or branded stationery sets.',
    colours: ['black', 'blue', 'red'],
    material: 'metal',
    brandingMethods: ['Laser Engraving', 'Screen Print'],
    featured: true,
  },
  {
    id: 'P75',
    slug: 'p75-navigator-black-gold',
    name: 'Navigator Black Gold',
    code: 'P75',
    category: 'pens',
    price: 0.82,
    image: '/images/products/P75.jpg',
    shortDesc: 'A sleek plastic pen with gold trim — high volume, high impact.',
    description:
      'The Navigator Black Gold is a smooth-writing plastic ballpoint with a striking gold trim finish. A reliable, cost-effective choice for large-volume corporate events, conferences, or welcome packs where impact matters without stretching budget.',
    colours: ['black', 'gold'],
    material: 'plastic',
    brandingMethods: ['Screen Print', 'Digital Print'],
    featured: true,
  },
  {
    id: 'MP16',
    slug: 'mp16-lenovo',
    name: 'Lenovo',
    code: 'MP16',
    category: 'pens',
    price: 0.82,
    image: '/images/products/MP16.jpg',
    shortDesc: 'A clean, slim metal pen — understated and professional.',
    description:
      'The Lenovo is a slim, lightweight metal ballpoint pen with a clean, modern silhouette. Its understated finish makes it versatile across industries — from finance and law to retail and hospitality.',
    colours: ['silver', 'black', 'blue'],
    material: 'metal',
    brandingMethods: ['Laser Engraving', 'Screen Print'],
    featured: true,
  },

  // ── NOTEBOOKS ─────────────────────────────────────────────────────────────
  {
    id: 'D138',
    slug: 'd138-elastic-black-notebook-a5',
    name: 'Elastic Black Notebook A5',
    code: 'D138',
    category: 'notebooks',
    price: 3.36,
    image: '/images/products/D138.jpg',
    shortDesc: 'Hardback A5 notebook with elastic closure — everyday elegance.',
    description:
      'A classic hardback A5 notebook in matte black with an elastic closure band. Cream-lined pages, a ribbon bookmark, and a rear pocket make it a complete everyday companion. Perfect for team gifts, onboarding kits, or client welcome packs.',
    colours: ['black'],
    material: 'paper',
    brandingMethods: ['Debossing', 'Foil Stamp', 'Screen Print'],
    featured: true,
  },

  // ── KEY RINGS ─────────────────────────────────────────────────────────────
  {
    id: 'KC01',
    slug: 'kc01-rectangular-metal-keychain-black',
    name: 'Rectangular Metal Keychain',
    code: 'KC01',
    category: 'keyrings',
    price: 0.78,
    image: '/images/products/KC01.jpg',
    shortDesc: 'Precision metal keychain with black insert — subtle and sharp.',
    description:
      'A precision-cut rectangular metal keychain with a polished surround and black contrasting insert. The black insert provides a strong print area for a logo or tagline. Ideal as a standalone giveaway or paired into a gift set.',
    colours: ['black', 'gold', 'silver'],
    material: 'metal',
    brandingMethods: ['Laser Engraving', 'Epoxy Dome'],
    featured: true,
  },

  // ── COMBO SETS ────────────────────────────────────────────────────────────
  {
    id: 'Sr111',
    slug: 'sr111-gift-set-classic-metal-pen-keychain',
    name: 'Gift Set — Classic Metal 2-in-1',
    code: 'Sr 111',
    category: 'combo-sets',
    price: 3.92,
    image: '/images/products/Sr 111.jpg',
    shortDesc: 'Classic metal pen + keychain gift set in a presentation box.',
    description:
      'A coordinated gift set pairing a classic metal ballpoint pen and a matching metal keychain, presented in a sleek gift box. Thoughtful, practical, and brand-consistent — a perfect thank-you gift, award, or welcome pack centrepiece.',
    colours: ['black', 'silver', 'gold'],
    material: 'metal',
    brandingMethods: ['Laser Engraving', 'Screen Print'],
    featured: true,
  },
  {
    id: 'Sr112',
    slug: 'sr112-gift-set-classic-metal-pen-keychain-v2',
    name: 'Gift Set — Classic Metal 2-in-1 (v2)',
    code: 'Sr 112',
    category: 'combo-sets',
    price: 3.92,
    image: '/images/products/Sr 112.jpg',
    shortDesc: 'Refined pen + keychain set with alternate finish options.',
    description:
      'The Sr 112 is a close sibling to the Sr 111 — same premium gift box presentation, same high-quality metal construction, with an alternative colour and finish range. Mix and match with the Sr 111 for event bundles or tiered gifting.',
    colours: ['blue', 'black', 'grey'],
    material: 'metal',
    brandingMethods: ['Laser Engraving', 'Screen Print'],
    featured: true,
  },

  // ── BAGS ──────────────────────────────────────────────────────────────────
  {
    id: 'JB01',
    slug: 'jb01-zipper-jute-bag-small',
    name: 'Zipper Jute Bag — Small',
    code: 'JB 01',
    category: 'bags',
    price: 2.99,
    image: '/images/products/JB 01.jpg',
    shortDesc: '18 × 26 × 10 cm eco jute bag with zipper — sustainable branding.',
    description:
      'A compact zipper jute bag (18 × 26 × 10 cm) made from natural jute fibre — durable, eco-friendly, and naturally brand-aligned. Its tactile surface takes print beautifully and communicates sustainability credentials without saying a word.',
    colours: ['brown', 'black', 'green'],
    material: 'jute',
    brandingMethods: ['Screen Print', 'Heat Transfer'],
    featured: true,
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}

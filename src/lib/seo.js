// src/lib/seo.js
// ─────────────────────────────────────────────────────────────────────────────
// Central SEO configuration and metadata helpers.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Legacy Imprint SW',
  tagline: 'Branded Promotional Products for UK Businesses',
  description:
    'Premium branded promotional products — pens, notebooks, bags and corporate giveaways — for UK businesses. Free visual proof, clear pricing, and personal service from Tiverton, Devon.',
  url: 'https://www.legacyimprint.co.uk',
  email: 'info@legacyimprint.co.uk',
  location: 'Tiverton, Devon, United Kingdom',
  twitter: '',   // add handle when ready
  instagram: '', // add handle when ready
  linkedin: '',  // add handle when ready
};

/**
 * Build a Next.js metadata object for any page.
 * @param {object} overrides — page-specific title, description, path, image
 */
export function buildMetadata({
  title,
  description,
  path = '',
  image = '/og-default.jpg',
} = {}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const fullDesc = description || SITE.description;
  const url = `${SITE.url}${path}`;

  return {
    title: fullTitle,
    description: fullDesc,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDesc,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

/**
 * JSON-LD structured data for the homepage (LocalBusiness + WebSite)
 */
export const homepageStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: SITE.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tiverton',
        addressRegion: 'Devon',
        addressCountry: 'GB',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      priceRange: '£',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#business` },
    },
  ],
};

/**
 * JSON-LD structured data for a product page
 */
export function productStructuredData(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${SITE.url}${product.image}`,
    brand: { '@type': 'Brand', name: SITE.name },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: product.price,
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/products/${product.slug}`,
      seller: { '@type': 'Organization', name: SITE.name },
    },
  };
}

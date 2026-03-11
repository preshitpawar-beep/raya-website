// src/app/sitemap.js
import { PRODUCTS } from '@/lib/products';
import { SITE } from '@/lib/seo';

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/quote`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const productPages = PRODUCTS.map((p) => ({
    url: `${SITE.url}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}

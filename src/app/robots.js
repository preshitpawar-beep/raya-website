// src/app/robots.js
import { SITE } from '@/lib/seo';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '' },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}

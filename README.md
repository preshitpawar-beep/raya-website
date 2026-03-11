# Legacy Imprint SW — Website

A modern, SEO-optimised Next.js website for branded promotional products.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A GitHub account
- A Vercel account (free tier is fine)

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
legacy-imprint/
├── public/
│   └── images/
│       ├── products/       ← Add product images here (e.g. MP09.jpg)
│       └── hero/           ← Add hero/AI-generated images here
├── src/
│   ├── app/                ← Pages (Next.js App Router)
│   │   ├── page.jsx        ← Homepage
│   │   ├── layout.jsx      ← Root layout (navbar + footer)
│   │   ├── products/
│   │   │   ├── page.jsx    ← Products listing
│   │   │   ├── ProductsClient.jsx  ← Filter logic
│   │   │   └── [slug]/
│   │   │       └── page.jsx  ← Individual product page
│   │   ├── quote/
│   │   │   ├── page.jsx    ← Quote page
│   │   │   └── QuoteForm.jsx
│   │   ├── privacy-policy/
│   │   │   └── page.jsx
│   │   ├── terms/
│   │   │   └── page.jsx
│   │   ├── not-found.jsx   ← 404 page
│   │   ├── sitemap.js      ← Auto-generated sitemap
│   │   └── robots.js       ← Robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/       ← Homepage sections
│   │   │   ├── Hero.jsx
│   │   │   ├── Marquee.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── WhyUs.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   └── CtaBanner.jsx
│   │   └── ui/             ← Reusable components
│   │       ├── Button.jsx
│   │       ├── ProductCard.jsx
│   │       └── ScrollReveal.jsx
│   ├── lib/
│   │   ├── products.js     ← ⭐ PRODUCT DATA — edit here to add/change products
│   │   └── seo.js          ← ⭐ SEO config — edit SITE object with your details
│   └── styles/
│       └── globals.css
```

---

## ➕ Adding a New Product

1. Open `src/lib/products.js`
2. Add a new object to the `PRODUCTS` array, following the existing pattern
3. Add the product image to `public/images/products/` — filename must match the `image` field
4. That's it — the product will appear on the listing and get its own SEO page automatically

---

## 🖼️ Adding Product Images

Place product images in `public/images/products/`. The filename must match exactly what's in `src/lib/products.js`.

For example, `MP09.jpg` must exist at `public/images/products/MP09.jpg`.

Recommended image size: **800×800px minimum**, square crop, white or light background.

---

## 🤖 AI-Generated Hero Images

For the homepage hero section, you can replace the dark gradient background with an AI-generated image.

1. Generate an image (recommended: Midjourney, DALL-E 3, or Adobe Firefly)
   - Suggested prompt: *"Premium branded stationery flatlay — pens, notebooks, and keychains arranged on a dark slate surface, dramatic side lighting, editorial photography style, dark moody tones, 16:9"*
2. Save it to `public/images/hero/hero-bg.jpg`
3. In `src/components/sections/Hero.jsx`, replace the `<div className="absolute inset-0 bg-gradient-to-br..."` with:
```jsx
<Image
  src="/images/hero/hero-bg.jpg"
  alt="Legacy Imprint branded products"
  fill
  className="object-cover opacity-50"
  priority
/>
```

---

## 📧 Setting Up the Quote Form

The quote form currently simulates submission. To receive real enquiries, connect it to an email service:

### Option A: Formspree (easiest, free tier available)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy your endpoint URL
3. In `src/app/quote/QuoteForm.jsx`, replace the simulate line with:
```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

### Option B: Resend (professional, free 100 emails/day)
1. Sign up at [resend.com](https://resend.com)
2. Add `RESEND_API_KEY` to your Vercel environment variables
3. Create an API route at `src/app/api/quote/route.js`

---

## 🌐 Deploying to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**
3. Import your GitHub repository
4. Leave all settings as default — Vercel detects Next.js automatically
5. Click **Deploy**

Your site will be live at `https://your-repo-name.vercel.app` within minutes.

To connect your custom domain (`legacyimprint.co.uk`):
- Go to your Vercel project → **Settings** → **Domains**
- Add `legacyimprint.co.uk` and follow the DNS instructions

---

## 🔍 SEO Checklist

- [x] Unique title & meta description per page
- [x] Open Graph / Twitter Card tags
- [x] JSON-LD structured data (LocalBusiness + Product schema)
- [x] Sitemap at `/sitemap.xml`
- [x] Robots.txt at `/robots.txt`
- [x] Canonical URLs
- [x] Semantic HTML (h1, h2, nav, main, article, section)
- [x] Image alt tags
- [ ] Add Google Search Console verification (paste meta tag into `src/app/layout.jsx`)
- [ ] Submit sitemap in Google Search Console after deployment

---

## 🎨 Customisation

### Colours
Edit `tailwind.config.js` — look for `colors.ink`, `colors.cream`, and `colors.gold`.

### Fonts
Edit the Google Fonts URL in `src/styles/globals.css` and `src/app/layout.jsx`.

### Brand info
Edit `SITE` object in `src/lib/seo.js` — name, email, location, social handles.

---

## 📞 Support

This codebase is clean, well-commented, and straightforward. If you get stuck:
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)

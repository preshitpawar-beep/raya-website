'use client';
// src/app/quote/QuoteForm.jsx
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle } from 'lucide-react';
import { CATEGORIES } from '@/lib/products';

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: searchParams.get('product') || '',
    productName: searchParams.get('name') || '',
    category: '',
    quantity: '',
    brandingDetails: '',
    deadline: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with your email service (e.g. Resend, Formspree, Netlify Forms)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16 text-center space-y-6">
        <CheckCircle size={40} strokeWidth={1} className="mx-auto text-gold" />
        <h2 className="font-display text-4xl font-light text-ink">Quote received</h2>
        <p className="text-ink-500 font-light leading-relaxed max-w-sm mx-auto">
          Thank you, {form.name.split(' ')[0]}. We'll review your request and come
          back to you within one working day with clear pricing.
        </p>
        <p className="text-sm text-ink-400 font-light">
          Check your inbox at <strong className="font-normal">{form.email}</strong>
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3.5 bg-cream-50 border border-ink-200 text-sm font-light text-ink placeholder:text-ink-300 focus:outline-none focus:border-gold transition-colors duration-200';
  const labelClass = 'block text-xs font-mono uppercase tracking-wider text-ink-500 mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Your details */}
      <fieldset className="space-y-5">
        <legend className="font-display text-2xl font-light text-ink mb-6">
          Your details
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClass}>Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="company" className={labelClass}>Company</label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Your business name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@yourcompany.co.uk"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Optional"
              className={inputClass}
            />
          </div>
        </div>
      </fieldset>

      {/* Product details */}
      <fieldset className="space-y-5 pt-6 border-t border-ink-200">
        <legend className="font-display text-2xl font-light text-ink mb-6">
          Product details
        </legend>

        {form.product && (
          <div className="px-4 py-3 bg-gold/10 border border-gold/30 text-sm font-light text-ink-700">
            Product pre-selected: <strong className="font-normal text-ink">{form.product}</strong>
            {form.productName && ` — ${form.productName}`}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="product" className={labelClass}>Product Code</label>
            <input
              id="product"
              name="product"
              type="text"
              value={form.product}
              onChange={handleChange}
              placeholder="e.g. MP09, P75"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="category" className={labelClass}>Category</label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Not sure / any</option>
              {CATEGORIES.filter((c) => c.slug !== 'all').map(({ slug, label }) => (
                <option key={slug} value={slug}>{label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className={labelClass}>Estimated Quantity *</label>
            <select
              id="quantity"
              name="quantity"
              required
              value={form.quantity}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select quantity</option>
              <option value="25–50">25–50</option>
              <option value="50–100">50–100</option>
              <option value="100–250">100–250</option>
              <option value="250–500">250–500</option>
              <option value="500–1000">500–1,000</option>
              <option value="1000+">1,000+</option>
            </select>
          </div>
          <div>
            <label htmlFor="deadline" className={labelClass}>Deadline / Required By</label>
            <input
              id="deadline"
              name="deadline"
              type="text"
              value={form.deadline}
              onChange={handleChange}
              placeholder="e.g. 15 Aug 2025, ASAP"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="brandingDetails" className={labelClass}>
            Branding Details
          </label>
          <textarea
            id="brandingDetails"
            name="brandingDetails"
            rows={3}
            value={form.brandingDetails}
            onChange={handleChange}
            placeholder="Logo colour, branding area, any specific finish preferences..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Anything else?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Any other requirements, questions, or context..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </fieldset>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-5 bg-ink text-cream-100 text-xs tracking-widest uppercase font-light hover:bg-gold hover:text-ink transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border border-cream-100/40 border-t-cream-100 rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={13} />
              Send Quote Request
            </>
          )}
        </button>
        <p className="mt-4 text-xs text-ink-400 font-light text-center">
          By submitting you agree to be contacted regarding your quote request.
        </p>
      </div>
    </form>
  );
}

export default function QuoteForm() {
  return (
    <Suspense fallback={<div className="py-10 text-center text-ink-400 font-light text-sm">Loading form…</div>}>
      <QuoteFormInner />
    </Suspense>
  );
}

// src/app/not-found.jsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <p className="font-mono text-[10px] tracking-widest-3 uppercase text-gold">
          404
        </p>
        <h1 className="font-display font-light text-7xl text-ink">
          Page not found
        </h1>
        <p className="text-ink-500 font-light max-w-sm mx-auto leading-relaxed">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/"
            className="px-8 py-3 bg-ink text-cream-100 text-xs tracking-widest uppercase font-light hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="px-8 py-3 border border-ink text-ink text-xs tracking-widest uppercase font-light hover:bg-ink hover:text-cream-100 transition-all duration-300"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}

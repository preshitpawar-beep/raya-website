'use client';
// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/products', label: 'Products' },
  { href: '/quote', label: 'Get a Quote' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-cream-100/95 backdrop-blur-md border-b border-ink-200/40 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col leading-none"
            aria-label="Legacy Imprint SW — Home"
          >
            <span
              className={`font-display font-light tracking-widest text-xl transition-colors duration-300 ${
                scrolled || !isHome ? 'text-ink-900' : 'text-ink-900'
              }`}
            >
              LEGACY
            </span>
            <span
              className={`font-mono text-[10px] tracking-widest-2 uppercase transition-colors duration-300 ${
                scrolled || !isHome ? 'text-gold' : 'text-gold'
              }`}
            >
              Imprint SW
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/');
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm tracking-widest uppercase font-body font-light relative after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                    active ? 'text-gold after:w-full' : 'text-ink-600 hover:text-ink after:w-0 hover:after:w-full'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/quote"
              className="ml-4 px-6 py-2.5 bg-ink text-cream-100 text-xs tracking-widest uppercase font-light hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Quote
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-ink-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream-100 flex flex-col justify-center items-center gap-10 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="font-display text-4xl font-light text-ink hover:text-gold transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/quote"
          className="mt-4 px-10 py-4 bg-ink text-cream-100 text-sm tracking-widest uppercase font-light"
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}

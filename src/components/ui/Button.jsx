// src/components/ui/Button.jsx
import Link from 'next/link';
import { clsx } from 'clsx';

const variants = {
  primary: 'bg-ink text-cream-100 hover:bg-gold hover:text-ink border border-ink hover:border-gold',
  outline: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream-100',
  gold: 'bg-gold text-ink border border-gold hover:bg-gold-dark hover:border-gold-dark',
  ghost: 'bg-transparent text-ink hover:text-gold',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-light tracking-widest text-xs uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold';
  const sizes = {
    sm: 'px-5 py-2',
    md: 'px-8 py-3.5',
    lg: 'px-12 py-5',
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

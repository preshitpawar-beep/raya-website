'use client';
// src/components/ui/ScrollReveal.jsx
// Adds the .visible class to .reveal elements when they enter the viewport.
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger children if multiple come in together
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 0);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}

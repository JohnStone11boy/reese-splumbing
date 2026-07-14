import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll<HTMLElement>(
              '.reveal-up, .reveal-left, .reveal-right, .reveal-fade'
            );
            targets.forEach((t, i) => {
              setTimeout(() => t.classList.add('visible'), i * 80);
            });
            // Also add visible to the section itself if it has a reveal class
            if (
              entry.target.classList.contains('reveal-up') ||
              entry.target.classList.contains('reveal-fade')
            ) {
              entry.target.classList.add('visible');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const revealEls = el.querySelectorAll<HTMLElement>(
            '.reveal-up, .reveal-left, .reveal-right, .reveal-fade'
          );
          revealEls.forEach((target, index) => {
            setTimeout(() => target.classList.add('visible'), index * 100);
          });
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

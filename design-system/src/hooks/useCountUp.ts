import { useEffect, useRef, useState } from "react";

/** Animates a number up to `target` once the element scrolls into view, mirroring the original data-count/data-suffix counters. */
export function useCountUp<T extends HTMLElement = HTMLElement>(target: number, duration = 1400) {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isFloat = target % 1 !== 0;
    const animate = () => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(target * eased);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted = target % 1 !== 0 ? value.toFixed(1) : Math.round(value).toLocaleString();
  return { ref, formatted };
}

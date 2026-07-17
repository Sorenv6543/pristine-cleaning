import { useEffect, useRef } from "react";

/**
 * Ports the original `.reveal` / `.reveal.in` scroll-in animation.
 * Attach the returned ref to an element carrying the `reveal` class (plus an
 * optional `d1`-`d4` delay class); it gains `in` once it scrolls into view.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }

    // Elements already sufficiently visible in the initial viewport (hero,
    // trust bar, ...) reveal immediately rather than waiting on the
    // IntersectionObserver's first async callback, whose very first firing
    // can land mid-layout (e.g. before web fonts swap in) and read as
    // non-intersecting with nothing afterward to trigger a recheck on an
    // otherwise-static page.
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight - 60 && rect.bottom > 0) {
      el.classList.add("in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

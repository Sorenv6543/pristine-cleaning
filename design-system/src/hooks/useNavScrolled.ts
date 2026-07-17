import { useEffect, useState } from "react";

/** Mirrors the original `.nav.scrolled` toggle: swaps nav background past 80px of scroll. */
export function useNavScrolled(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

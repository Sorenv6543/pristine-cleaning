import { useEffect, useState } from "react";

/** Tracks which section id is active via IntersectionObserver, matching the original nav-link logic. */
export function useActiveSection(sectionIds: string[], initial = sectionIds[0]): string {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: [0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

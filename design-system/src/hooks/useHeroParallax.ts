import { useEffect, useRef } from "react";

/** Subtle mouse-driven parallax tilt on the hero's floating shapes, ported 1:1 from the original IIFE. */
export function useHeroParallax<T extends HTMLElement = HTMLDivElement>() {
  const stageRef = useRef<T | null>(null);

  useEffect(() => {
    const heroArt = stageRef.current?.closest(".hero-art") as HTMLElement | null;
    const shapeStage = stageRef.current;
    if (!heroArt || !shapeStage) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;

    const onMove = (ev: MouseEvent) => {
      const r = heroArt.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5;
      const y = (ev.clientY - r.top) / r.height - 0.5;
      shapeStage.style.transform = `translate3d(${x * -12}px,${y * -10}px,0)`;
    };
    const onLeave = () => {
      shapeStage.style.transform = "";
    };

    heroArt.addEventListener("mousemove", onMove);
    heroArt.addEventListener("mouseleave", onLeave);
    return () => {
      heroArt.removeEventListener("mousemove", onMove);
      heroArt.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return stageRef;
}

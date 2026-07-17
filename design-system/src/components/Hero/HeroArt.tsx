import { useHeroParallax } from "../../hooks/useHeroParallax";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function HeroArt() {
  const shapeStageRef = useHeroParallax<HTMLDivElement>();
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="hero-art reveal d2" aria-hidden="true">
      <div className="shape-stage" ref={shapeStageRef}>
        <div className="shape shape-bubble" />
        <div className="shape shape-card">
          <div className="sc-dot" />
          <div className="sc-line" />
          <div className="sc-line short" />
        </div>
        <div className="shape shape-cube">
          <div className="face f-front" />
          <div className="face f-top" />
          <div className="face f-right" />
        </div>
        <div className="shape shape-sparkle">
          <svg viewBox="0 0 90 90" fill="none">
            <defs>
              <linearGradient id="sg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#fff" />
                <stop offset="1" stopColor="#F0ABFC" />
              </linearGradient>
            </defs>
            <path d="M45 6l7 28 28 7-28 7-7 28-7-28L10 41l28-7z" fill="url(#sg)" stroke="rgba(255,255,255,.7)" strokeWidth={1.5} />
          </svg>
        </div>
      </div>
    </div>
  );
}

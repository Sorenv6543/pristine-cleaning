import type { ReactNode } from "react";
import { Button, ArrowIcon } from "../Button";
import { HeroArt } from "./HeroArt";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Hero.css";

export interface HeroProps {
  eyebrow?: ReactNode;
  title: string;
  subtitle: string;
  lede: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  urgencyLabel?: string;
  trustLine?: ReactNode;
}

export function Hero({
  eyebrow = "★ ★ ★ ★ ★   Trusted by VRBO Hosts",
  title,
  subtitle,
  lede,
  primaryCtaHref = "#contact",
  primaryCtaLabel = "Book a Same-Day Clean",
  secondaryCtaHref = "#services",
  secondaryCtaLabel = "View Services",
  urgencyLabel = "⚡ Same-Day Slots Available",
  trustLine,
}: HeroProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <header className="hero" id="home">
      <div className="container hero-grid">
        <div ref={revealRef} className="hero-copy reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-display" style={{ marginTop: 14 }}>
            {title}
            <span className="hero-sub">{subtitle}</span>
          </h1>
          <p className="hero-lede">{lede}</p>

          <div className="cta-row">
            <Button href={primaryCtaHref} variant="teal" size="lg" pulse icon={<ArrowIcon />} data-cta="hero-primary">
              {primaryCtaLabel}
            </Button>
            <Button href={secondaryCtaHref} variant="ghost" size="lg">
              {secondaryCtaLabel}
            </Button>
          </div>

          <div className="urgency-badge">
            <span className="dot" />
            <span>{urgencyLabel}</span>
          </div>

          <p className="trust-line">
            {trustLine ?? (
              <>
                <strong>4.9★</strong> rated by VRBO hosts · <strong>2-hour</strong> response guarantee
              </>
            )}
          </p>
        </div>

        <HeroArt />
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </header>
  );
}

import { Button } from "../Button";
import "./StickyCta.css";

export interface StickyCtaProps {
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function StickyCta({
  title = "⚡ Same-Day Available",
  subtitle = "4.9★ rated by VRBO hosts",
  ctaHref = "#contact",
  ctaLabel = "Book Now",
}: StickyCtaProps) {
  return (
    <aside className="sticky-cta" aria-label="Quick book">
      <div className="sc-left">
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
      <Button href={ctaHref} variant="teal">{ctaLabel}</Button>
    </aside>
  );
}

import { GlassCard } from "../GlassCard";
import { Button } from "../Button";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./PricingCard.css";

function DotIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
      <path d="M3 7l3 3 5-6" />
    </svg>
  );
}

export interface PricingCardProps {
  tier: string;
  name: string;
  price: string;
  priceLabel?: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
  popularLabel?: string;
  revealDelay?: "d1" | "d2" | "d3" | "d4";
}

export function PricingCard({
  tier,
  name,
  price,
  priceLabel = "starting at",
  features,
  ctaLabel = "Book This",
  ctaHref = "#contact",
  featured = false,
  popularLabel = "★ Most Popular",
  revealDelay,
}: PricingCardProps) {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <GlassCard
      as="article"
      ref={revealRef}
      className={["price-card", "reveal", revealDelay, featured ? "featured" : ""].filter(Boolean).join(" ")}
    >
      {featured && <span className="popular-badge">{popularLabel}</span>}
      <span className="price-tier">{tier}</span>
      <span className="price-name">{name}</span>
      <div className="price-amt">
        <span className="small">{priceLabel}</span>
        <span className="big">{price}</span>
      </div>
      <ul className="price-features">
        {features.map((feature, i) => (
          <li key={i}>
            <span className="dot"><DotIcon /></span>
            {feature}
          </li>
        ))}
      </ul>
      <Button href={ctaHref} variant="teal">{ctaLabel}</Button>
    </GlassCard>
  );
}

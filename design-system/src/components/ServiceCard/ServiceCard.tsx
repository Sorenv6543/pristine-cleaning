import type { ReactNode } from "react";
import { GlassCard } from "../GlassCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./ServiceCard.css";

export type ServiceAccent = "violet" | "teal" | "rose";

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkLabel?: string;
  linkHref?: string;
  accent?: ServiceAccent;
  revealDelay?: "d1" | "d2" | "d3" | "d4";
}

export function ServiceCard({
  icon,
  title,
  description,
  linkLabel = "Get a Quote",
  linkHref = "#contact",
  accent = "violet",
  revealDelay,
}: ServiceCardProps) {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <GlassCard
      as="article"
      ref={revealRef}
      className={[
        "service-card",
        accent !== "violet" ? `accent-${accent}` : "",
        "reveal",
        revealDelay,
      ].filter(Boolean).join(" ")}
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={linkHref} className="service-link">
        {linkLabel}
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
          <path d="M4 10h12M11 5l5 5-5 5" />
        </svg>
      </a>
    </GlassCard>
  );
}

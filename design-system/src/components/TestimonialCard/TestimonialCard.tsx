import { GlassCard } from "../GlassCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./TestimonialCard.css";

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.15 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.65l5.9-.85z" />
    </svg>
  );
}

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarInitial: string;
  rating?: number;
  revealDelay?: "d1" | "d2" | "d3" | "d4";
}

export function TestimonialCard({ quote, name, role, avatarInitial, rating = 5, revealDelay }: TestimonialCardProps) {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <GlassCard as="article" ref={revealRef} className={["tcard", "reveal", revealDelay].filter(Boolean).join(" ")}>
      <div className="stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => <StarIcon key={i} />)}
      </div>
      <blockquote>&quot;{quote}&quot;</blockquote>
      <div className="who">
        <div className="avatar">{avatarInitial}</div>
        <div>
          <span className="name">{name}</span><br />
          <span className="role">{role}</span>
        </div>
      </div>
    </GlassCard>
  );
}

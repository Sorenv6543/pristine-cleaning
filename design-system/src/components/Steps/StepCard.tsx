import { GlassCard } from "../GlassCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export interface StepCardProps {
  number: number;
  title: string;
  description: string;
  revealDelay?: "d1" | "d2" | "d3" | "d4";
}

export function StepCard({ number, title, description, revealDelay }: StepCardProps) {
  const revealRef = useScrollReveal<HTMLLIElement>();

  return (
    <GlassCard as="li" ref={revealRef} className={["step", "reveal", revealDelay].filter(Boolean).join(" ")}>
      <div className="step-num">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </GlassCard>
  );
}

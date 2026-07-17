import { GlassCard } from "../GlassCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./About.css";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10l4 4 8-8" />
    </svg>
  );
}

export interface DiffListProps {
  eyebrow?: string;
  title: string;
  items: string[];
}

export function DiffList({ eyebrow = "— Why Pristine", title, items }: DiffListProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <GlassCard as="div" variant="glass-hi" ref={revealRef} className="diff-card reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h3 style={{ marginTop: 10 }}>{title}</h3>
      <ul className="diff-list">
        {items.map((item, i) => (
          <li key={i}>
            <span className="check"><CheckIcon /></span>
            {item}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

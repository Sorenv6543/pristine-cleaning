import { GlassCard } from "../GlassCard";
import { useCountUp } from "../../hooks/useCountUp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export interface StatCounterProps {
  label: string;
  /** Animated numeric value; omit and pass `staticValue` for a non-counting stat like "VRBO". */
  value?: number;
  suffix?: string;
  staticValue?: string;
  revealDelay?: "d1" | "d2" | "d3" | "d4";
}

export function StatCounter({ label, value, suffix, staticValue, revealDelay }: StatCounterProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const { ref: countRef, formatted } = useCountUp<HTMLSpanElement>(value ?? 0);

  return (
    <GlassCard
      as="div"
      className={["trust-card", "reveal", revealDelay].filter(Boolean).join(" ")}
      ref={revealRef}
    >
      <div className="trust-num">
        {staticValue ? (
          <span className="accent">{staticValue}</span>
        ) : (
          <>
            <span ref={countRef}>{value === undefined ? "" : formatted}</span>
            {suffix && <span className="accent">{suffix}</span>}
          </>
        )}
      </div>
      <div className="trust-label">{label}</div>
    </GlassCard>
  );
}

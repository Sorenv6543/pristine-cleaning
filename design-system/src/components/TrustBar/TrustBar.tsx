import { StatCounter } from "./StatCounter";
import type { StatCounterProps } from "./StatCounter";
import "./TrustBar.css";

export interface TrustBarProps {
  stats: StatCounterProps[];
}

const DEFAULT_STATS: StatCounterProps[] = [
  { value: 200, suffix: "+", label: "Cleanings Completed" },
  { value: 4.9, suffix: "★", label: "Host Rating", revealDelay: "d1" },
  { value: 2, suffix: "hr", label: "Response Guarantee", revealDelay: "d2" },
  { staticValue: "VRBO", label: "Specialist Cleaners", revealDelay: "d3" },
];

export function TrustBar({ stats = DEFAULT_STATS }: TrustBarProps) {
  return (
    <section className="trust" aria-label="Trust signals">
      <div className="container">
        <div className="trust-row">
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

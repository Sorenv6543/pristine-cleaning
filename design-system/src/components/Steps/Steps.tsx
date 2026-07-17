import { StepCard } from "./StepCard";
import type { StepCardProps } from "./StepCard";
import "./Steps.css";

export interface StepsProps {
  steps: Omit<StepCardProps, "number">[];
}

export function Steps({ steps }: StepsProps) {
  return (
    <ol className="steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {steps.map((step, i) => (
        <StepCard key={i} number={i + 1} {...step} />
      ))}
    </ol>
  );
}

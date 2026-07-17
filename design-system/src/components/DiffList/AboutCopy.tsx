import type { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./About.css";

export interface AboutCopyProps {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  signatureInitial: string;
  signatureName: string;
  signatureRole: ReactNode;
}

export function AboutCopy({ eyebrow = "— About Us", title, paragraphs, signatureInitial, signatureName, signatureRole }: AboutCopyProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="about-copy reveal d1">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h-section" style={{ fontSize: "clamp(28px,3.4vw,44px)" }}>{title}</h2>
      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      <div className="sig">
        <div className="avatar">{signatureInitial}</div>
        <div>
          <strong style={{ color: "var(--ink)", display: "block" }}>{signatureName}</strong>
          <span>{signatureRole}</span>
        </div>
      </div>
    </div>
  );
}

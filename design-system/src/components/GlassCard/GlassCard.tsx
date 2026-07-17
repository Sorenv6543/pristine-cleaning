import { forwardRef } from "react";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

export interface GlassCardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: "glass" | "glass-hi";
  children: ReactNode;
  className?: string;
}

export const GlassCard = forwardRef<HTMLElement, GlassCardProps>(
  ({ as: Tag = "div", variant = "glass", children, className = "", ...rest }, ref) => {
    return (
      <Tag ref={ref} className={[variant, className].filter(Boolean).join(" ")} {...rest}>
        {children}
      </Tag>
    );
  }
);
GlassCard.displayName = "GlassCard";

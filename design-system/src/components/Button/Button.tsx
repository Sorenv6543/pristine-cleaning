import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "teal" | "outline-white" | "ghost";
export type ButtonSize = "md" | "lg";

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pulse?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function Button({
  variant = "teal",
  size = "md",
  pulse = false,
  icon,
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const cls = [
    "btn",
    `btn-${variant}`,
    size === "lg" ? "btn-lg" : "",
    pulse ? "cta-pulse" : "",
    className,
  ].filter(Boolean).join(" ");

  if (href !== undefined) {
    return (
      <a href={href} className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  );
}

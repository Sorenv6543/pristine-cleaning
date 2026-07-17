import type { ReactNode } from "react";
import { BrandMark } from "../Navbar";
import "./Footer.css";

export interface FooterColumn {
  title: string;
  items: ReactNode[];
}

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface FooterProps {
  description: string;
  columns: FooterColumn[];
  socials?: FooterSocialLink[];
  year?: number;
  copyrightName?: string;
  bottomLinks?: { label: string; href: string }[];
}

const DEFAULT_BOTTOM_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Service Areas", href: "#" },
];

export function Footer({
  description,
  columns,
  socials = [],
  year = new Date().getFullYear(),
  copyrightName = "Pristine Cleaning Co. · Licensed & Insured",
  bottomLinks = DEFAULT_BOTTOM_LINKS,
}: FooterProps) {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#home" className="brand" aria-label="Pristine Cleaning home">
              <BrandMark />
              <span>
                <span className="brand-name">Pristine</span>
                <span className="brand-sub">Cleaning Co.</span>
              </span>
            </a>
            <p>{description}</p>
            {socials.length > 0 && (
              <div className="socials" aria-label="Social media">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label}>{social.icon}</a>
                ))}
              </div>
            )}
          </div>

          {columns.map((col) => (
            <div className="foot-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>© <span>{year}</span> {copyrightName}</span>
          <span style={{ display: "flex", gap: 18 }}>
            {bottomLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </span>
        </div>
      </div>
    </footer>
  );
}

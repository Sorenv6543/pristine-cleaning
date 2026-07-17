import { Button } from "../Button";
import { useNavScrolled } from "../../hooks/useNavScrolled";
import { useActiveSection } from "../../hooks/useActiveSection";
import "./Navbar.css";

export function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="brand-g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset=".55" stopColor="#C084FC" />
          <stop offset="1" stopColor="#F0ABFC" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#brand-g)" />
      <path d="M13 27l3-16 4 12 4-12 3 16" stroke="white" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface NavbarProps {
  links: NavLink[];
  loginHref?: string;
  bookHref?: string;
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "Pricing", href: "#pricing", sectionId: "pricing" },
  { label: "About", href: "#about", sectionId: "about" },
];

export function Navbar({ links = DEFAULT_LINKS, loginHref = "#contact", bookHref = "#contact" }: NavbarProps) {
  const scrolled = useNavScrolled(80);
  const active = useActiveSection(links.map((l) => l.sectionId));

  return (
    <nav className={["nav", scrolled ? "scrolled" : ""].filter(Boolean).join(" ")} aria-label="Primary">
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Pristine Cleaning — home">
          <BrandMark />
          <span>
            <span className="brand-name">Pristine</span>
            <span className="brand-sub">Cleaning Co.</span>
          </span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={["nav-link", link.sectionId === active ? "active" : ""].filter(Boolean).join(" ")}>
              {link.label}
            </a>
          ))}
        </div>

        <Button href={loginHref} variant="outline-white">Login</Button>
        <Button href={bookHref} variant="teal" className="book-now">Book Now</Button>
      </div>
    </nav>
  );
}

import type { CSSProperties } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { ServiceCard } from "./components/ServiceCard";
import { Steps } from "./components/Steps";
import { DiffList, AboutCopy } from "./components/DiffList";
import { TestimonialCard } from "./components/TestimonialCard";
import { PricingCard } from "./components/PricingCard";
import { PhoneCard } from "./components/PhoneCard";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { StickyCta } from "./components/StickyCta";
import { Button, ArrowIcon } from "./components/Button";
import { useScrollReveal } from "./hooks/useScrollReveal";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10l4 4 8-8" />
    </svg>
  );
}

function SectionHead({
  eyebrow, title, lede, centered = false,
}: { eyebrow: string; title: string; lede?: string; centered?: boolean }) {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={revealRef}
      className="section-head reveal"
      style={centered ? { alignItems: "center", textAlign: "center", marginLeft: "auto", marginRight: "auto" } : undefined}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h-section">{title}</h2>
      {lede && <p className="lede" style={centered ? { textAlign: "center", marginLeft: "auto", marginRight: "auto" } : undefined}>{lede}</p>}
    </div>
  );
}

function BgSoft({ b1Style }: { b1Style?: CSSProperties }) {
  return (
    <div className="bg-soft">
      <div className="b b1" style={b1Style} />
      <div className="b b2" />
    </div>
  );
}

const SERVICE_ICONS = {
  turnover: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M9 21v-8h6v8" />
      <path d="M3 13h18" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <circle cx="8" cy="15" r="1.2" fill="currentColor" />
      <circle cx="12" cy="15" r="1.2" fill="currentColor" />
      <circle cx="16" cy="15" r="1.2" fill="currentColor" />
    </svg>
  ),
};

function SocialIcon({ name }: { name: "instagram" | "facebook" | "yelp" | "google" }) {
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.4-2 2-2h2V2.2C16.6 2.1 15.4 2 14.2 2 11.5 2 10 3.6 10 6.7V10H7v4h3v8h3z" />
        </svg>
      );
    case "yelp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.5 2.4v10.7L4 11.4c-.6-.2-1 .3-.9.9.5 1.9 1.4 3.6 2.6 5 .4.4 1 .3 1.3-.1l3.5-4.5zM21 14.6l-6.5-.4c-.6 0-.9.6-.6 1.1l3.6 5.4c.3.4.9.5 1.3.1 1.4-1.3 2.4-2.9 2.9-4.8.2-.6-.2-1.3-.7-1.4zM11 22l1.9-6.1c.2-.6-.4-1.1-.9-.8L6.5 17.4c-.5.3-.5 1-.1 1.3 1.4 1.3 3.1 2.2 5 2.7.5.1 1.1-.4 1.1-.9zm.5-21c-1.9.3-3.7 1.1-5.1 2.3-.4.4-.4 1 .1 1.3l5 3c.5.3 1.1-.2 1-.7l-.3-5.1c0-.6-.6-.9-1.2-.8zm5 6.5L14 1c-.2-.5-.9-.6-1.2-.2-1.2 1.5-2 3.3-2.3 5.2-.1.6.6 1 1.1.8l4.3-1.6c.5-.3.6-.9.4-1.3 0 0 1.1 2.6 0 4.6z" />
        </svg>
      );
    case "google":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M21 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.1c-.2 1.2-.9 2.2-1.9 2.9v2.4h3.1c1.8-1.7 2.7-4.1 2.7-7.1z" />
          <path d="M12 21c2.6 0 4.7-.9 6.3-2.3l-3.1-2.4c-.9.6-2 .9-3.2.9-2.5 0-4.6-1.7-5.3-4H3.5v2.5C5.1 18.7 8.3 21 12 21z" />
        </svg>
      );
  }
}

export default function App() {
  const contactCopyRef = useScrollReveal<HTMLDivElement>();
  const servicesCtaRef = useScrollReveal<HTMLDivElement>();
  const servicesPricingNoteRef = useScrollReveal<HTMLParagraphElement>();
  const pricingNoteRef = useScrollReveal<HTMLParagraphElement>();

  return (
    <>
      <Navbar links={[
        { label: "Home", href: "#home", sectionId: "home" },
        { label: "Services", href: "#services", sectionId: "services" },
        { label: "Pricing", href: "#pricing", sectionId: "pricing" },
        { label: "About", href: "#about", sectionId: "about" },
      ]} />

      <Hero
        title="PRISTINE"
        subtitle="Cleaning Services"
        lede="Same-day VRBO turnovers. Flawless, fast, and trusted by hosts across the area. Photo-ready in hours — guaranteed."
      />

      <TrustBar stats={[
        { value: 200, suffix: "+", label: "Cleanings Completed" },
        { value: 4.9, suffix: "★", label: "Host Rating", revealDelay: "d1" },
        { value: 2, suffix: "hr", label: "Response Guarantee", revealDelay: "d2" },
        { staticValue: "VRBO", label: "Specialist Cleaners", revealDelay: "d3" },
      ]} />

      <section className="section" id="services">
        <BgSoft />
        <div className="container">
          <SectionHead
            eyebrow="— What We Handle"
            title="Cleaning, dialed in for hosts and homes."
            lede="From last-minute VRBO turnovers to weekly recurring service — every visit follows a photo-ready checklist with no shortcuts."
          />

          <div className="services-grid">
            <ServiceCard
              icon={SERVICE_ICONS.turnover}
              title="VRBO Turnover Cleaning"
              description="Between-guest deep cleans, fully restocked and photo-ready in hours. Linens, amenities, and host-verified checklists handled."
              accent="violet"
            />
            <ServiceCard
              icon={SERVICE_ICONS.bolt}
              title="Same-Day Emergency Clean"
              description="Last-minute booking? Surprise check-in? We show up. Guaranteed two-hour response window, seven days a week."
              accent="teal"
              revealDelay="d1"
            />
            <ServiceCard
              icon={SERVICE_ICONS.calendar}
              title="Standard Home Cleaning"
              description="Weekly, bi-weekly, and monthly recurring service for residents. Consistent team, consistent results, transparent pricing."
              accent="rose"
              revealDelay="d2"
            />
          </div>

          <div ref={servicesCtaRef} style={{ display: "flex", justifyContent: "center", marginTop: 42 }} className="reveal">
            <Button href="#contact" variant="teal" size="lg" pulse icon={<ArrowIcon />}>
              Book a Same-Day Clean
            </Button>
          </div>
          <p ref={servicesPricingNoteRef} className="pricing-note reveal d1" style={{ marginTop: 14 }}>⚡ Same-Day Slots Fill Fast · 4.9★ rated by VRBO hosts</p>
        </div>
      </section>

      <section className="section" id="how" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="— How It Works" title="Three steps. Spotless space." centered />

          <Steps steps={[
            { title: "Book online or call", description: "Tell us the property, date, and the level of clean. Quote arrives in minutes — no back-and-forth." },
            { title: "We arrive on schedule", description: "Same-day window or your booked slot — our team shows up with supplies, linens, and a host-verified checklist.", revealDelay: "d1" },
            { title: "Spotless, verified, done", description: "Photo confirmation when we leave. If anything's off, we come back free of charge. That's the guarantee.", revealDelay: "d2" },
          ]} />
        </div>
      </section>

      <section className="section" id="about">
        <BgSoft b1Style={{ left: -200, right: "auto" }} />
        <div className="container">
          <div className="about-grid">
            <DiffList
              title="Built for hosts. Loved by homeowners."
              items={[
                "VRBO-protocol trained — every cleaner certified",
                "Same-day availability, 7 days a week",
                "Host-friendly scheduling that flexes with check-ins",
                "Satisfaction guarantee — we return free if anything's missed",
              ]}
            />
            <AboutCopy
              title="A cleaning crew that thinks like a host."
              paragraphs={[
                "We started Pristine after watching too many turnovers go sideways: a missed amenity, a forgotten checklist, a 5-star review lost to a thin coat of dust. So we built a team that treats every property like their own listing — fast, photo-ready, and verified before we leave.",
                "Today we handle hundreds of turnovers a month across the area. Same-day emergencies, recurring residential, and everything in between.",
              ]}
              signatureInitial="P"
              signatureName="The Pristine Team"
              signatureRole="Servicing the Coachella Valley · Lic. & Insured"
            />
          </div>
        </div>
      </section>

      <section className="section" id="testimonials" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="— Host Reviews" title="Hosts who trust us with their five-star reviews." centered />

          <div className="testimonials-row">
            <TestimonialCard
              quote="Booked a same-day turnover at 9am, guests checked in at 4pm to a flawless property. They've saved my Superhost rating more than once."
              name="Marisol"
              role="VRBO Host · Palm Springs"
              avatarInitial="M"
            />
            <TestimonialCard
              quote="Photo confirmation after every clean, restock totally handled, and the linens look like a hotel. I stopped checking up on them after the second turnover."
              name="Devon"
              role="VRBO Host · Cathedral City"
              avatarInitial="D"
              revealDelay="d1"
            />
            <TestimonialCard
              quote="Manage three short-term rentals — Pristine is the only crew I trust with all of them. They text confirmation before guests even arrive."
              name="Alex"
              role="VRBO Host · La Quinta"
              avatarInitial="A"
              revealDelay="d2"
            />
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <BgSoft />
        <div className="container">
          <SectionHead
            eyebrow="— Transparent Pricing"
            title="No surprise fees. Ever."
            lede="Pricing reflects average 2-bed properties. Final quote in minutes after you book."
            centered
          />

          <div className="pricing-row">
            <PricingCard
              tier="Basic Turnover"
              name="Quick Reset"
              price="$120"
              features={[
                "Full kitchen & bathroom clean",
                "Bed strip & remake (linens by host)",
                "Trash removal & surface wipe-down",
                "Photo confirmation on completion",
              ]}
            />
            <PricingCard
              tier="Full Turnover"
              name="Restock & Reset"
              price="$185"
              featured
              revealDelay="d1"
              features={[
                "Everything in Basic Turnover",
                "Fresh linens supplied & laundered",
                "Amenity restock (paper, soap, coffee)",
                "Host-verified photo checklist",
                "Priority scheduling",
              ]}
            />
            <PricingCard
              tier="Premium Same-Day"
              name="Emergency Rescue"
              price="$245"
              revealDelay="d2"
              features={[
                "2-hour response, 7 days a week",
                "Everything in Full Turnover",
                "Deep-clean priority (oven, baseboards)",
                "Dedicated host concierge contact",
                "Re-clean guarantee within 24 hrs",
              ]}
            />
          </div>

          <p ref={pricingNoteRef} className="pricing-note reveal">⚡ Same-Day Slots Fill Fast · Final quote confirmed within 15 minutes of booking</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-blobs" aria-hidden="true">
          <div className="cb cb1" />
          <div className="cb cb2" />
        </div>

        <div className="container contact-grid">
          <div ref={contactCopyRef} className="contact-copy reveal">
            <span className="eyebrow">— Get Started</span>
            <h2 className="h-section">Ready for a Spotless Space?</h2>
            <p className="lede">Available 7 days a week. Same-day bookings welcome. We'll respond inside 2 hours — usually faster.</p>

            <ul className="contact-perks">
              <li><span className="check"><CheckIcon /></span>4.9★ rated by VRBO hosts</li>
              <li><span className="check"><CheckIcon /></span>Licensed, insured, background-checked crew</li>
              <li><span className="check"><CheckIcon /></span>Satisfaction guarantee or re-clean free</li>
            </ul>

            <PhoneCard phoneDisplay="(760) 555-0199" phoneHref="tel:+17605550199" />
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer
        description="Same-day VRBO turnovers and home cleaning across the Coachella Valley. Licensed, insured, and host-rated 4.9★."
        socials={[
          { label: "Instagram", href: "#", icon: <SocialIcon name="instagram" /> },
          { label: "Facebook", href: "#", icon: <SocialIcon name="facebook" /> },
          { label: "Yelp", href: "#", icon: <SocialIcon name="yelp" /> },
          { label: "Google reviews", href: "#", icon: <SocialIcon name="google" /> },
        ]}
        columns={[
          {
            title: "Services",
            items: [
              <a href="#services">VRBO Turnover</a>,
              <a href="#services">Same-Day Emergency</a>,
              <a href="#services">Standard Cleaning</a>,
              <a href="#pricing">Pricing</a>,
            ],
          },
          {
            title: "Company",
            items: [
              <a href="#about">About</a>,
              <a href="#testimonials">Reviews</a>,
              <a href="#contact">Contact</a>,
              <a href="#contact">Book Now</a>,
            ],
          },
          {
            title: "Contact",
            items: [
              <a href="tel:+17605550199">(760) 555-0199</a>,
              <a href="mailto:hello@pristine-clean.co">hello@pristine-clean.co</a>,
              "Cathedral City, CA",
              "Mon–Sun · 7am–10pm",
            ],
          },
        ]}
      />

      <StickyCta />
    </>
  );
}

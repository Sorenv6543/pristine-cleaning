import { useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Button, ArrowIcon } from "../Button";
import { Field } from "./Field";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./ContactForm.css";

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RX = /[\d().\-+\s]{7,}/;

type FieldKey = "name" | "email" | "phone" | "address" | "date" | "service";

const ERROR_MESSAGES: Record<FieldKey, string> = {
  name: "Please enter your name.",
  email: "Please enter a valid email.",
  phone: "Please enter a phone number.",
  address: "Please enter the property address.",
  date: "Please choose a date.",
  service: "Please choose a service.",
};

const EMPTY_VALUES: Record<FieldKey, string> = {
  name: "", email: "", phone: "", address: "", date: "", service: "",
};

function validate(key: FieldKey, value: string): boolean {
  const v = value.trim();
  if (!v) return false;
  if (key === "email" && !EMAIL_RX.test(v)) return false;
  if (key === "phone" && !PHONE_RX.test(v)) return false;
  return true;
}

export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  successMessage?: string;
}

export function ContactForm({
  title = "Request a Clean",
  subtitle = "We'll reply within 2 hours with a quote and slot.",
  submitLabel = "Request a Clean",
  successMessage = "✓ Request received. We'll text you a quote within 2 hours.",
}: ContactFormProps) {
  const revealRef = useScrollReveal<HTMLFormElement>();
  const [values, setValues] = useState(EMPTY_VALUES);
  const [invalid, setInvalid] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const fieldRefs = useRef<Partial<Record<FieldKey, HTMLInputElement | HTMLSelectElement | null>>>({});

  const todayIso = useMemo(() => new Date().toISOString().split("T")[0], []);

  const setValue = (key: FieldKey, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      setInvalid((prev) => ({ ...prev, [key]: !validate(key, value) }));
    }
  };

  const onBlur = (key: FieldKey) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setInvalid((prev) => ({ ...prev, [key]: !validate(key, values[key]) }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const keys = Object.keys(values) as FieldKey[];
    const nextInvalid: Partial<Record<FieldKey, boolean>> = {};
    let firstBad: FieldKey | null = null;

    for (const key of keys) {
      const ok = validate(key, values[key]);
      nextInvalid[key] = !ok;
      if (!ok && !firstBad) firstBad = key;
    }

    setTouched(Object.fromEntries(keys.map((k) => [k, true])));
    setInvalid(nextInvalid);

    if (firstBad !== null) {
      fieldRefs.current[firstBad]?.focus();
      return;
    }

    setSuccess(true);
    setSubmitting(true);
    setTimeout(() => {
      setValues(EMPTY_VALUES);
      setTouched({});
      setInvalid({});
      setSuccess(false);
      setSubmitting(false);
    }, 4500);
  };

  return (
    <form ref={revealRef} className="contact-form reveal d1" onSubmit={onSubmit} noValidate>
      <h3 style={{ fontSize: 22, marginBottom: 4 }}>{title}</h3>
      <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 6 }}>{subtitle}</p>

      <Field fieldName="name" label="Full Name" error={ERROR_MESSAGES.name} invalid={!!invalid.name}>
        <input
          id="f-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Jane Host"
          ref={(el) => { fieldRefs.current.name = el; }}
          value={values.name}
          onChange={(e) => setValue("name", e.target.value)}
          onBlur={() => onBlur("name")}
        />
      </Field>

      <div className="field-row">
        <Field fieldName="email" label="Email" error={ERROR_MESSAGES.email} invalid={!!invalid.email}>
          <input
            id="f-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@hostmail.com"
            ref={(el) => { fieldRefs.current.email = el; }}
            value={values.email}
            onChange={(e) => setValue("email", e.target.value)}
            onBlur={() => onBlur("email")}
          />
        </Field>
        <Field fieldName="phone" label="Phone" error={ERROR_MESSAGES.phone} invalid={!!invalid.phone}>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(555) 123-4567"
            ref={(el) => { fieldRefs.current.phone = el; }}
            value={values.phone}
            onChange={(e) => setValue("phone", e.target.value)}
            onBlur={() => onBlur("phone")}
          />
        </Field>
      </div>

      <Field fieldName="address" label="Property Address" error={ERROR_MESSAGES.address} invalid={!!invalid.address}>
        <input
          id="f-address"
          name="address"
          type="text"
          autoComplete="street-address"
          required
          placeholder="123 Sunset Dr, Cathedral City"
          ref={(el) => { fieldRefs.current.address = el; }}
          value={values.address}
          onChange={(e) => setValue("address", e.target.value)}
          onBlur={() => onBlur("address")}
        />
      </Field>

      <div className="field-row">
        <Field fieldName="date" label="Date Needed" error={ERROR_MESSAGES.date} invalid={!!invalid.date}>
          <input
            id="f-date"
            name="date"
            type="date"
            required
            min={todayIso}
            ref={(el) => { fieldRefs.current.date = el; }}
            value={values.date}
            onChange={(e) => setValue("date", e.target.value)}
            onBlur={() => onBlur("date")}
          />
        </Field>
        <Field fieldName="service" label="Service" error={ERROR_MESSAGES.service} invalid={!!invalid.service}>
          <select
            id="f-service"
            name="service"
            required
            ref={(el) => { fieldRefs.current.service = el; }}
            value={values.service}
            onChange={(e) => setValue("service", e.target.value)}
            onBlur={() => onBlur("service")}
          >
            <option value="">Select service…</option>
            <option value="turnover">VRBO Turnover</option>
            <option value="same-day">Same-Day Emergency</option>
            <option value="standard">Standard Home Cleaning</option>
          </select>
        </Field>
      </div>

      <Button type="submit" variant="teal" size="lg" style={{ marginTop: 8 }} disabled={submitting} icon={!submitting ? <ArrowIcon /> : undefined}>
        {submitting ? "✓ Received" : submitLabel}
      </Button>

      <div className="form-foot">
        <p className="micro">⚡ Same-day slots fill fast — <strong>book early</strong></p>
        <p className="micro"><strong>4.9★</strong> rated by VRBO hosts</p>
      </div>

      <div className={["form-success", success ? "show" : ""].filter(Boolean).join(" ")} role="status" aria-live="polite">
        {successMessage}
      </div>
    </form>
  );
}

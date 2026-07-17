import type { ReactNode } from "react";

export interface FieldProps {
  fieldName: string;
  label: string;
  error: string;
  invalid: boolean;
  children: ReactNode;
}

export function Field({ fieldName, label, error, invalid, children }: FieldProps) {
  return (
    <div className={["field", invalid ? "invalid" : ""].filter(Boolean).join(" ")} data-field={fieldName}>
      <label htmlFor={`f-${fieldName}`}>{label}</label>
      {children}
      <span className="err">{error}</span>
    </div>
  );
}
